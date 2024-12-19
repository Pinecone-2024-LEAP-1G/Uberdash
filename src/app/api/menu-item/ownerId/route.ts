import { NextRequest } from "next/server";

import { menuItemModel } from "@/lib/models";
import { connectToMongoDB } from "@/lib/db";

connectToMongoDB();
export const POST = async (request: NextRequest) => {
  const { restaurantId } = await request.json();
  try {
    const menuItem = await menuItemModel.find({
      restaurantId: restaurantId,
    });
    return Response.json({ message: "success", menuItem });
  } catch (error) {
    return Response.json({ error });
  }
};
