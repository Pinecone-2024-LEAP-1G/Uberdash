import { connectToMongoDB } from "@/lib/db";
import { OrderItemModel } from "@/lib/models";
import OrderModel from "@/lib/models/order";
import { NextRequest } from "next/server";

connectToMongoDB();
export const GET = async (_request: NextRequest) => {
  try {
    const orderItems = await OrderItemModel.find();

    return Response.json({ orderItems });
  } catch (error) {
    return Response.json({ error });
  }
};

export const POST = async (request: NextRequest) => {
  const { price, quantity, orderId, restaurantId } = await request.json();

  try {
    const orderItems = await OrderItemModel.create({
      price,
      quantity,
      orderId,
      restaurantId,
    });

    const { _id } = orderItems;

    const updatedOrder = await OrderModel.findByIdAndUpdate(
      {
        _id: orderId,
      },
      { $push: { orderItems: _id } },
      { new: true }
    );

    return Response.json({
      orderItems,
      updatedOrder,
    });
  } catch (error) {
    return Response.json({ error });
  }
};
