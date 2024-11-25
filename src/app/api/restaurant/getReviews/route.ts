import { NextRequest } from "next/server";
import { RestaurantModel, menuItemModel, ReviewModel } from "@/lib/models";

export const POST = async (req: NextRequest) => {
  const { ownerId } = await req.json();
  try {
    const restaurant = await RestaurantModel.findOne({ ownerId });

    const reviews = await ReviewModel.find({ restaurantId: restaurant?._id });

    return Response.json({ reviews: reviews });
  } catch (error) {
    return Response.json({ error });
  }
};
