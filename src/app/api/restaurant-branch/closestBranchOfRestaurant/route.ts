import { NextRequest } from "next/server";
import { RestaurantBranchModel } from "@/lib/models";
import { connectToMongoDB } from "@/lib/db";

connectToMongoDB();
export const GET = async (req: NextRequest) => {
  const { restaurantId } = await req.json();
  try {
    const branches = RestaurantBranchModel.find({ restaurantId });
    return Response.json({ branches });
  } catch (error) {
    return Response.json({ error });
  }
};
