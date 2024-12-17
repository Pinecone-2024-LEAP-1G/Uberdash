import { NextRequest } from "next/server";
import { OrderItemModel } from "@/lib/models";
import { connectToMongoDB } from "@/lib/db";
import mongoose from "mongoose";

connectToMongoDB();
export const POST = async (request: NextRequest) => {
  const { menuItemId } = await request.json();
  try {
    const itemId = mongoose.Types.ObjectId.createFromHexString(menuItemId);
    const orderedItems = await OrderItemModel.find({ menuItem: itemId });

    const sumOfQuantity = orderedItems.reduce((sum, item) => {
      return sum + (item.quantity || 0);
    }, 0);

    const numberofOrders = orderedItems.length;
    return Response.json({
      message: "success",
      orderedItems,
      numberofOrders,
      sumOfQuantity,
    });
  } catch (error) {
    return Response.json({ error });
  }
};
