import { connectToMongoDB } from "@/lib/db";
import { UserModel } from "@/lib/models";
import { NextRequest } from "next/server";

connectToMongoDB();

export const PUT = async (request: NextRequest) => {
  const { _id, businessName, vatId } = await request.json();

  try {
    const user = await UserModel.findOneAndUpdate(
      {
        _id,
      },
      { businessName, vatId },
      { new: true }
    );

    return Response.json({ message: "success", user });
  } catch (error) {
    return Response.json({ message: error });
  }
};
