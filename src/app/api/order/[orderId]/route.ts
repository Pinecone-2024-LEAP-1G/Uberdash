import OrderModel from "@/lib/models/order";
import { NextRequest } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ orderId: string }> }
) => {
  const orderId = (await params).orderId;
  try {
    const order = await OrderModel.findOne({ _id: orderId })
      .populate("userId")
      .populate({
        path: "orderItem",
      });
    Response.json({ order: order });
  } catch (error) {
    Response.json({ error });
  }
};
