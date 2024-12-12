import { connectToMongoDB } from "@/lib/db";
import OrderModel from "@/lib/models/order";
import { NextRequest } from "next/server";

connectToMongoDB();
export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) => {
  const userId = (await params).userId;
  try {
    const order = await OrderModel.find({ userId: userId })
    .populate({
      path: "orderItems",
    });

    return Response.json({ order: order });
  } catch (error) {
    return Response.json({ error });
  }
};
