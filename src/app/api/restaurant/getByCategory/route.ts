import { NextRequest } from "next/server";
import { menuItemModel, RestaurantModel } from "@/lib/models";
import mongoose from "mongoose";
import { connectToMongoDB } from "@/lib/db";

connectToMongoDB();
export const POST = async (req: NextRequest) => {
  const { categoryId } = await req.json();
  try {
    const catId = mongoose.Types.ObjectId.createFromHexString(categoryId);
    const restaurantIds = await menuItemModel.aggregate([
      {
        $match: {
          categoryId: catId,
        },
      },
      {
        $group: {
          _id: "$restaurantId",
        },
      },
    ]);
    await RestaurantModel.populate(restaurantIds, {
      path: "_id",
    });
    console.log(restaurantIds);
    return Response.json({ restaurantIds });
  } catch (error) {
    return Response.json({ error });
  }
};
