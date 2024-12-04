import { NextRequest } from "next/server";
import { RestaurantOwnerModel } from "@/lib/models";

export const GET = async () => {
  try {
    const owners = await RestaurantOwnerModel.find();
    return Response.json({ owners });
  } catch (error) {
    return Response.json({ message: error });
  }
};

export const POST = async (req: NextRequest) => {
  const { email } = await req.json();
  try {
    const newOwner = await RestaurantOwnerModel.create({ email });
    return Response.json({ newOwner });
  } catch (error) {
    return Response.json({ error });
  }
};
