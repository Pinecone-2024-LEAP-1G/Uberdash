import { RestaurantBranchModel } from "@/lib/models/restaurant-branch.model";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  const { restaurantId } = await req.json();
  try {
    const branches = await RestaurantBranchModel.find({
      restaurantId,
    });
    return Response.json({ branches });
  } catch (error) {
    return Response.json({ error });
  }
};
