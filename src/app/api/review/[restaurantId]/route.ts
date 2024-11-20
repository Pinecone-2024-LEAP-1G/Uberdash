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

export const DELETE = async (
  _request: NextRequest,
  { params }: { params: Promise<{ _id: string }> }
) => {
  const _id = (await params)._id;
  try {
    await ReviewModel.deleteOne({ _id });

    return Response.json({ message: "succesfully deleted review" });
  } catch (error) {
    return Response.json({ error_message: error });
  }
};
