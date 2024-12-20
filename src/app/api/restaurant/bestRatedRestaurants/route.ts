import { RestaurantModel } from "@/lib/models";
import { connectToMongoDB } from "@/lib/db";
import { ReviewModel } from "@/lib/models";

connectToMongoDB();

export const GET = async () => {
  try {
    const ratings = await ReviewModel.aggregate([
      {
        $group: {
          _id: "$restaurantId",
          averageRating: { $avg: "$rating" },
          reviewCount: { $sum: 1 },
        },
      },
      {
        $sort: { averageRating: -1 },
      },
    ]);
    console.log(ratings);

    if (ratings?.length === 0) {
      return Response.json({ message: "No reviews available" });
    }

    const restaurantsWithRatings = await Promise.all(
      ratings?.map(async (rating) => {
        const restaurant = await RestaurantModel.findById(rating?._id);

        if (!restaurant) {
          return null;
        }

        return {
          ...restaurant.toObject(),
          averageRating: rating?.averageRating,
          reviewCount: rating?.reviewCount,
        };
      })
    );

    const validRestaurants = restaurantsWithRatings.filter(Boolean);

    return Response.json({ restaurants: validRestaurants });
  } catch (error) {
    console.error("Error fetching best-rated restaurants:", error);
    return Response.json({ error: "An error occurred" });
  }
};
