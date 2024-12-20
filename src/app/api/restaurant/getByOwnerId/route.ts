import { NextRequest } from "next/server";
import { RestaurantModel, menuItemModel } from "@/lib/models";
import { connectToMongoDB } from "@/lib/db";

connectToMongoDB();
export const POST = async (req: NextRequest) => {
  const { ownerId } = await req.json();
  try {
    const restaurant = await RestaurantModel.findOne({ ownerId });

    const menuItems = await menuItemModel.find({
      restaurantId: restaurant?._id,
    });

    return Response.json({ restaurant: restaurant, menuItems: menuItems });
  } catch (error) {
    return Response.json({ error });
  }
};
