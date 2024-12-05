import { NextRequest } from "next/server";

import { menuItemModel, RestaurantModel } from "@/lib/models";
import { connectToMongoDB } from "@/lib/db";

connectToMongoDB();
export const POST = async (request: NextRequest) => {
  const { ownerId } = await request.json();
  try {
    const restaurant = await RestaurantModel.findOne({ ownerId: ownerId });
    const menuItem = await menuItemModel.find({
      restaurantId: restaurant?._id,
    });
    return Response.json({ message: "success", menuItem });
  } catch (error) {
    return Response.json({ error });
  }
};
