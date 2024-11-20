import { OrderItemModel } from "@/lib/models";
import { NextRequest } from "next/server";

export const GET = async (_request: NextRequest) => {
  try {
    const order = await OrderItemModel.find();

    return Response.json({ order });
  } catch (error) {
    return Response.json({ error_message: error });
  }
};

export const POST = async (request: NextRequest) => {
  const { price, quantity, orderId, restaurantId } = await request.json();

  try {
    const orderItem = await OrderItemModel.create({
      price,
      quantity,
      orderId,
      restaurantId,
    });

    return Response.json({
      message: "succesfully created order Item",
      orderItem,
    });
  } catch (error) {
    return Response.json({ error_message: error });
  }
};
