import { OrderItem, OrderItemModel } from "@/lib/models";
import OrderModel, { Order } from "@/lib/models/order";
import { NextRequest } from "next/server";

type CreateOrderRequsetBody = Order & { orderItems: [OrderItem] };

export const POST = async (request: NextRequest) => {
  const {
    priceWithoutDiscount,
    priceWithDiscount,
    userId,
    cancelledTime,
    readyToStartTime,
    inPreparationTime,
    readyForPickupTime,
    onTheWayTime,
    deliveredTime,
    discountCodeId,
    deliveryAddressId,
    orderItems,
  } = (await request.json()) as CreateOrderRequsetBody;

  const newOrders = await OrderItemModel.insertMany<OrderItem>(orderItems);

  const newOrderIds = newOrders.map((newOrder) => newOrder._id);

  try {
    const order = await OrderModel.create({
      orderItemCount: newOrders.length,
      priceWithoutDiscount,
      priceWithDiscount,
      userId,
      cancelledTime,
      readyToStartTime,
      inPreparationTime,
      readyForPickupTime,
      onTheWayTime,
      deliveredTime,
      discountCodeId,
      deliveryAddressId,
      orderItems: newOrderIds,
    });

    return Response.json({
      message: "succesfully created order",
      order,
    });
  } catch (error) {
    return Response.json({ error });
  }
};
