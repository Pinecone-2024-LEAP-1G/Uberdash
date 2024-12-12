import { connectToMongoDB } from "@/lib/db";
import { menuItemModel } from "@/lib/models";
import { NextRequest } from "next/server";

connectToMongoDB();
export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ restaurantId: string }> }
) => {
  const restaurantId = (await params).restaurantId;
  try {
    const menuItems = await menuItemModel.find({ restaurantId: restaurantId });
    return Response.json({ menuItems: menuItems });
  } catch (error) {
    return Response.json({ error });
  }
};
