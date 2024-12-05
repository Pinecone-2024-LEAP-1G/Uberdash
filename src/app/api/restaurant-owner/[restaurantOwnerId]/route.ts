import { NextRequest } from "next/server";
import { RestaurantOwnerModel } from "@/lib/models";
import mongoose from "mongoose";
import { connectToMongoDB } from "@/lib/db";

connectToMongoDB();
export const GET = async (
  _req: NextRequest,
  { params }: { params: Promise<{ restaurantOwnerId: string }> }
) => {
  const restaurantOwnerId = (await params).restaurantOwnerId;
  const id = mongoose.Types.ObjectId.createFromHexString(restaurantOwnerId);
  try {
    const owner = await RestaurantOwnerModel.findById({ _id: id });
    return Response.json({ owner });
  } catch (error) {
    return Response.json({ message: error });
  }
};
