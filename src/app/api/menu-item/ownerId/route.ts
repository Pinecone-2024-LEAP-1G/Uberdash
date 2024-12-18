import { NextRequest } from "next/server";

import { menuItemModel, RestaurantModel } from "@/lib/models";
import { connectToMongoDB } from "@/lib/db";

connectToMongoDB();
export const POST = async (request: NextRequest) => {
  const { restaurantId } = await request.json();
  console.log(restaurantId);
  try {
    const menuItem = await menuItemModel.find({
      restaurantId: restaurantId,
    });
    return Response.json({ message: "success", menuItem });
  } catch (error) {
    return Response.json({ error });
  }
};
