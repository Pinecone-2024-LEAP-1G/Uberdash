import { NextRequest } from "next/server";

import { OrderItem } from "@/lib/models";
import { Order } from "@/lib/models";
import { OrderItemModel } from "@/lib/models";
import mongoose from "mongoose";
import { connectToMongoDB } from "@/lib/db";
import OrderModel from "@/lib/models/order";

connectToMongoDB();

export const POST = async (req: NextRequest) => {
  const { restaurantId } = await req.json();
  try {
    const id = mongoose.Types.ObjectId.createFromHexString(restaurantId);
    const orders = await OrderModel.aggregate([
      {
        $lookup: {
          from: "order-items",
          localField: "orderItems",
          foreignField: "_id",
          as: "orderItemsDetails",
        },
      },
      {
        $match: {
          "orderItemsDetails.restaurantId": id,
        },
      },
    ]);

    return Response.json({ orders });
  } catch (error) {
    return Response.json({ error });
  }
};
