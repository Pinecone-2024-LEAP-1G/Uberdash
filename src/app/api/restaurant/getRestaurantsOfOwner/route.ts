import { NextRequest } from "next/server";
import { RestaurantModel } from "@/lib/models";
import { connectToMongoDB } from "@/lib/db";

connectToMongoDB();
export const POST = async (req: NextRequest) => {
  const { ownerId } = await req.json();
  try {
    const restaurants = await RestaurantModel.find({ ownerId });

    return Response.json({ restaurants: restaurants });
  } catch (error) {
    return Response.json({ error });
  }
};
