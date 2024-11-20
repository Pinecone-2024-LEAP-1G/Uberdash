import { ReviewModel } from "@/lib/models/review.model";
import { NextRequest } from "next/server";

export const GET = async (
  _request: NextRequest,
  { params }: { params: Promise<{ restaurantId: string }> }
) => {
  const restaurantId = (await params).restaurantId;
  try {
    const reviews = await ReviewModel.find({ restaurantId });

    return Response.json({ reviews });
  } catch (error) {
    return Response.json({ error_message: error });
  }
};
