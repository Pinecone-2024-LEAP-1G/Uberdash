import { connectToMongoDB } from "@/lib/db";
import { OrderItem, OrderItemModel } from "@/lib/models";
import OrderModel, { Order } from "@/lib/models/order";
import { NextRequest } from "next/server";

connectToMongoDB();
type CreateOrderRequsetBody = Order & { orderItems: [OrderItem] };

export const GET = async () => {
  try {
    const order = await OrderModel.find()
      .populate({ path: "userId" })
      .populate({ path: "orderItems" })
      .populate({ path: "discountCodeId" })
      .populate({ path: "deliveryAddressId" });

    return Response.json({ order });
  } catch (error) {
    return Response.json({ error });
  }
};

export const POST = async (request: NextRequest) => {
  const { userId, deliveryAddressId, orderItems } =
    (await request.json()) as CreateOrderRequsetBody;

  const newOrders = await OrderItemModel.insertMany(orderItems);

  const newOrderIds = newOrders.map((newOrder) => newOrder._id);

  const orderItemCount = newOrders.reduce(
    (total, orderItem) => total + orderItem.quantity,
    0
  );

  const totalPrice = newOrders.reduce(
    (total, orderItem) => (total + orderItem.quantity) * orderItem.price,
    0
  );

  try {
    const order = await OrderModel.create({
      orderItemCount,
      userId,
      deliveryAddressId,
      totalPrice: totalPrice,
      orderItems: newOrderIds,
    });

    return Response.json({
      message: "Successfully created order",
      order,
    });
  } catch (error) {
    return Response.json({ error });
  }
};
