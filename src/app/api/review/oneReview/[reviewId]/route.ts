import { ReviewModel } from "@/lib/models";
import { connectToMongoDB } from "@/lib/db";
import { NextRequest } from "next/server";

connectToMongoDB();
export const GET = async (
  _request: NextRequest,
  { params }: { params: Promise<{ reviewId: string }> }
) => {
  const reviewId = (await params).reviewId;
  try {
    const review = await ReviewModel.findOne({ orderId: reviewId });
    return Response.json({ review });
  } catch (error) {
    return Response.json({ error });
  }
};
