import { NextRequest } from "next/server";
import { menuItemModel } from "@/lib/models";
import { connectToMongoDB } from "@/lib/db";

connectToMongoDB();

export const DELETE = async (
  _req: NextRequest,
  { params }: { params: Promise<{ itemId: string }> }
) => {
  const itemId = (await params).itemId;
  console.log(itemId);
  try {
    const menuItem = await menuItemModel.findByIdAndDelete({ _id: itemId });
    return Response.json({ menuItem });
  } catch (error) {
    return Response.json({ message: error });
  }
};
