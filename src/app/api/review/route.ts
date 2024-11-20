import { ReviewModel } from "@/lib/models/review.model";
import { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  const { comment, rating, userId, restaurantId } = await request.json();

  try {
    const review = await ReviewModel.create({
      comment,
      rating,
      userId,
      restaurantId,
    });

    return Response.json({ message: "succesfully created review", review });
  } catch (error) {
    return Response.json({ error_message: error });
  }
};
