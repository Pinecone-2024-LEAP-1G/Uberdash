import { NextRequest } from "next/server";
import { menuItemModel } from "@/lib/models";
import { MenuItem } from "@/components/MenuItem";

export const GET = async () => {
  try {
    const menuItems = await menuItemModel.find();
    return Response.json({ menuItems });
  } catch (error) {
    return Response.json({ message: error });
  }
};

export const POST = async (req: NextRequest) => {
  const {
    name,
    description,
    size,
    price,
    available,
    categoryId,
    restaurantId,
    image,
  } = await req.json();
  try {
    const newMenuItem = await menuItemModel.create({
      name,
      description,
      size,
      price,
      available,
      categoryId,
      restaurantId,
      image,
    });
    return Response.json({ newMenuItem });
  } catch (error) {
    return Response.json({ message: error });
  }
};

export const DELETE = async (req: NextRequest) => {
  const { itemId } = await req.json();
  try {
    const deleted = await menuItemModel.findByIdAndDelete({ _id: itemId });

    return Response.json({ item: deleted });
  } catch (error) {
    return Response.json({ message: error });
  }
};
