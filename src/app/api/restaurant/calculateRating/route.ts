import { NextRequest } from "next/server";
import { ReviewModel } from "@/lib/models";
import { connectToMongoDB } from "@/lib/db";

connectToMongoDB();
export const POST = async (req: NextRequest) => {
  const { restaurantId } = await req.json();

  try {
    const reviews = await ReviewModel.find({ restaurantId: restaurantId });
    if (reviews.length === 0) {
      return Response.json({ message: "No reviews" });
    }
    const rating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = (rating / reviews.length).toFixed(1);

    return Response.json({ message: averageRating });
  } catch (error) {
    return Response.json({ error });
  }
};
