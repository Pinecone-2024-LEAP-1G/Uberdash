import { NextRequest } from "next/server";
import { RestaurantOwnerModel } from "@/lib/models";

export const GET = async (
  _req: NextRequest,
  { params }: { params: Promise<{ restaurantOwnerId: string }> }
) => {
  const restaurantOwnerId = (await params).restaurantOwnerId;
  try {
    const owner = RestaurantOwnerModel.find({ _id: restaurantOwnerId });
    return Response.json({ owner });
  } catch (error) {
    return Response.json({ message: error });
  }
};
