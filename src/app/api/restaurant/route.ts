import { NextRequest } from "next/server";
import { RestaurantModel } from "@/lib/models";

export const GET = async () => {
  try {
    const restaurants = RestaurantModel.find();
    return Response.json({ restaurants });
  } catch (error) {
    return Response.json({ error });
  }
};

export const POST = async (req: NextRequest) => {
  const { name, image, banner, info } = await req.json();
  try {
    const newRestaurant = await RestaurantModel.create({
      name,
      image,
      banner,
      info,
    });
    return Response.json({ newRestaurant });
  } catch (error) {
    return Response.json({ error });
  }
};
