import OrderModel from "@/lib/models/order";
import { NextRequest } from "next/server";

export const GET = async (
  _req: NextRequest,
  { params }: { params: Promise<{ deliveryId: string }> }
) => {
  const deliveryAddressId = (await params).deliveryId;
  try {
    const order = await OrderModel.findOne({
      deliveryAddressId: deliveryAddressId,
    });

    if (!order) {
      return new Response(JSON.stringify({ error: "Order not found" }), {
        status: 404,
      });
    }
    console.log(order);

    return Response.json({ order });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to fetch orders" }), {
      status: 500,
    });
  }
};
