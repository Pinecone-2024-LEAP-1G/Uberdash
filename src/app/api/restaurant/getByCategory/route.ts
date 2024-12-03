import { NextRequest } from "next/server";
import { menuItemModel } from "@/lib/models";
import mongoose from "mongoose";

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
    return Response.json({ restaurantIds });
  } catch (error) {
    return Response.json({ error });
  }
};
