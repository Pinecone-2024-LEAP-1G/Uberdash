import { NextRequest } from "next/server";
import { Restaurant, RestaurantModel, Review, ReviewModel } from "@/lib/models";

type CreateReview = Restaurant & { reviews: [Review] };

export const GET = async () => {
  try {
    const restaurants = await RestaurantModel.find();
    return Response.json({ restaurants });
  } catch (error) {
    return Response.json({ error });
  }
};

export const POST = async (req: NextRequest) => {
  const { ownerId, name, image, banner, info, reviews } =
    (await req.json()) as CreateReview;

  const newReviews = await ReviewModel.insertMany<Review>(reviews);

  const newReviewIds = newReviews.map((newReview) => newReview._id);

  try {
    const newRestaurant = await RestaurantModel.create({
      name,
      image,
      banner,
      info,
      ownerId,
      reviews: newReviewIds,
    });
    return Response.json({ newRestaurant });
  } catch (error) {
    return Response.json({ error });
  }
};
