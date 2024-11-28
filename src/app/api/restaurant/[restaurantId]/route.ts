import { RestaurantModel } from "@/lib/models";
import { NextRequest } from "next/server";
import path from "path";

export const GET = async (
  _request: NextRequest,
  { params }: { params: Promise<{ restaurantId: string }> }
) => {
  const restaurantId = (await params).restaurantId;
  try {
    const restaurant = await RestaurantModel.findById({
      _id: restaurantId,
    });
    // .populate({ path: "reviews" });

    return Response.json({ restaurant });
  } catch (error) {
    return Response.json({ error });
  }
};
