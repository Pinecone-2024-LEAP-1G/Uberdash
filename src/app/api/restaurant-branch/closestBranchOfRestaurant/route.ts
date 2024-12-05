import { NextRequest } from "next/server";
import { RestaurantBranchModel } from "@/lib/models";
import { connectToMongoDB } from "@/lib/db";

connectToMongoDB();
const closestBranchOfRestaurant = async (req: NextRequest) => {
  const { restaurantId, location } = await req.json();
  try {
    const branches = RestaurantBranchModel.find({ restaurantId });
  } catch (error) {
    return Response.json({ error });
  }
};
