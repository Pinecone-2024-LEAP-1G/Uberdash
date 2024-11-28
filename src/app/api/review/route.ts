import { RestaurantModel } from "@/lib/models";
import { ReviewModel } from "@/lib/models/review.model";
import { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  const { comment, rating, userId, restaurantId } = await request.json();

  try {
    const reviews = await ReviewModel.create({
      comment,
      rating,
      userId,
      restaurantId,
    });
    const { _id } = reviews;

    const updatedRestaurant = await RestaurantModel.findById(restaurantId);
    if (!updatedRestaurant) {
      return Response.json(
        { error_message: "Restaurant not found" },
        { status: 404 }
      );
    }
    updatedRestaurant.reviews.push(_id);
    await updatedRestaurant.save();

    return Response.json({
      message: "succesfully created review",
      reviews,
      updatedRestaurant,
    });
  } catch (error) {
    return Response.json({ error_message: error });
  }
};
