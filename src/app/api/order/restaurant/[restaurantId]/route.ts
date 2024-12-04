import { OrderItemModel } from "@/lib/models";
import OrderModel from "@/lib/models/order";
import { patch } from "@mui/material";
import { log } from "console";
import { NextRequest } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ restaurantId: string }> }
) => {
  const restaurantId = (await params).restaurantId;

  try {
    const restaurantOrders = await OrderItemModel.find({
      restaurantId,
    });

    return new Response(JSON.stringify({ restaurant: restaurantOrders }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);

    return new Response(JSON.stringify({ error: "Aldaa garlaa" }), {
      status: 500,
    });
  }
};
