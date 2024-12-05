import { NextRequest } from "next/server";
import { Restaurant, RestaurantModel } from "@/lib/models";
import { connectToMongoDB } from "@/lib/db";

connectToMongoDB();
export const GET = async () => {
  try {
    const restaurants = await RestaurantModel.find();
    return Response.json({ restaurants });
  } catch (error) {
    return Response.json({ error });
  }
};

export const POST = async (req: NextRequest) => {
  const { ownerId, name, image, banner, info } =
    (await req.json()) as Restaurant;

  try {
    const newRestaurant = await RestaurantModel.create({
      name,
      image,
      banner,
      info,
      ownerId,
    });
    return Response.json({ newRestaurant });
  } catch (error) {
    return Response.json({ error });
  }
};
