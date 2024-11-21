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
      message: "Successfully created order",
      order,
    });
  } catch (error) {
    console.error("Error creating order:", error);

    return Response.json(
      {
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  try {
    const order = await OrderModel.find();

    Response.json({ order });
  } catch (error) {
    Response.json({ error });
  }
};
