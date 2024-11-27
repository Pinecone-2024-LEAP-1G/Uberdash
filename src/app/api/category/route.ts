import { CategoryModel } from "@/lib/models";
import { NextRequest } from "next/server";

export const GET = async () => {
  try {
    const category = await CategoryModel.find();
    return Response.json({ category });
  } catch (error) {
    return Response.json({ message: error });
  }
};

export const POST = async (request: NextRequest) => {
  const { name, image } = await request.json();
  try {
    const category = await CategoryModel.create({
      name,
      image,
    });
    return Response.json({ message: "success", category });
  } catch (error) {
    return Response.json({ error });
  }
};
