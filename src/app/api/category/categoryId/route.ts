import { NextRequest } from "next/server";

import { CategoryModel } from "@/lib/models";
import mongoose from "mongoose";

export const POST = async (req: NextRequest) => {
  const { categoryId } = await req.json();
  try {
    const id = mongoose.Types.ObjectId.createFromHexString(categoryId);
    const category = await CategoryModel.findById({ _id: id });

    return Response.json({ category });
  } catch (error) {
    return Response.json({ error });
  }
};
