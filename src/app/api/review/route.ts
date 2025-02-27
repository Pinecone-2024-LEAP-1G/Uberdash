import { connectToMongoDB } from "@/lib/db";
import { ReviewModel } from "@/lib/models/review.model";
import { NextRequest } from "next/server";

connectToMongoDB();
export const POST = async (request: NextRequest) => {
  const { comment, rating, userId, restaurantId, orderId } =
    await request.json();

  try {
    const reviews = await ReviewModel.create({
      comment,
      rating,
      userId,
      restaurantId,
      orderId,
    });

    return Response.json({
      message: "succesfully created review",
      reviews,
    });
  } catch (error) {
    return Response.json({ error_message: error });
  }
};

export const GET = async () => {
  try {
    const review = await ReviewModel.find();
    return Response.json({ review });
  } catch (error) {
    return Response.json({ error });
  }
};
