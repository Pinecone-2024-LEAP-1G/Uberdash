import { connectToMongoDB } from "@/lib/db";
import { ReviewModel } from "@/lib/models/review.model";
import { NextRequest } from "next/server";

connectToMongoDB();
export const GET = async (
  _request: NextRequest,
  { params }: { params: Promise<{ restaurantId: string }> }
) => {
  const restaurantId = (await params).restaurantId;
  console.log("hehe");
  try {
    const reviews = await ReviewModel.find({ restaurantId: restaurantId });

    return Response.json({ reviews });
  } catch (error) {
    return Response.json({ error_message: error });
  }
};
