import { RestaurantBranchModel } from "@/lib/models/restaurant-branch.model";
import { NextRequest } from "next/server";

export const GET = async () => {
  try {
    const restaurantBranches = await RestaurantBranchModel.find();
    return Response.json({ branches: restaurantBranches });
  } catch (error) {
    return Response.json({ error });
  }
};

export const POST = async (req: NextRequest) => {
  const { restaurantId, branchName, location } = await req.json();
  try {
    const newRestaurantBranch = await RestaurantBranchModel.create({
      restaurantId,
      branchName,
      location,
    });
    return Response.json({ branch: newRestaurantBranch });
  } catch (error) {
    return Response.json({ error });
  }
};
