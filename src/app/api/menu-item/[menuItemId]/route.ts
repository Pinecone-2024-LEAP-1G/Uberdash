import { NextRequest } from "next/server";
import { menuItemModel } from "@/lib/models";
import { connectToMongoDB } from "@/lib/db";

connectToMongoDB();
export const GET = async (
  _req: NextRequest,
  { params }: { params: Promise<{ menuItemId: string }> }
) => {
  const menuItemId = (await params).menuItemId;
  try {
    const menuItem = await menuItemModel.findById({ _id: menuItemId });
    return Response.json({ menuItem });
  } catch (error) {
    return Response.json({ message: error });
  }
};
