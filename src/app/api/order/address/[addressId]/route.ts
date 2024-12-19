import OrderModel from "@/lib/models/order";
import { NextRequest } from "next/server";

export const GET = async (
  _req: NextRequest,
  { params }: { params: Promise<{ addressId: string }> }
) => {
  const deliveryAddressId = (await params).addressId;

  try {
    const order = await OrderModel.findOne({
      deliveryAddressId: deliveryAddressId,
    }).populate({ path: "deliveryAddressId" });
    if (!order) {
      return new Response(JSON.stringify({ error: "Order not found" }), {
        status: 404,
      });
    }

    return Response.json({ order });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to fetch orders" }), {
      status: 500,
    });
  }
};
