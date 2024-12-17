import { auth } from "@/lib/auth";
import { connectToMongoDB } from "@/lib/db";
import { UserModel } from "@/lib/models";
import mongoose from "mongoose";
import { NextRequest } from "next/server";
connectToMongoDB();

export const GET = async (request: NextRequest) => {
  const session = await auth();

  if (!session) {
    return Response.json({ message: "Not authenticated" }, { status: 401 });
  }

  try {
    const users = await UserModel.find({ _id: session.user.id }).populate(
      "favourites"
    );
    return Response.json({ users });
  } catch (error) {
    return Response.json({ message: error });
  }
};
export const PUT = async (
  request: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) => {
  const { userId } = await params;

  const session = await auth();

  if (!session) {
    return Response.json({ message: "Not authenticated" }, { status: 401 });
  }
  const { restaurantsId } = await request.json();

  try {
    const user = await UserModel.findById(session.user.id);
    const isIncluded = user?.favourites.includes(restaurantsId);
    if (isIncluded) {
      const updatedUser = await UserModel.findByIdAndUpdate(userId, {
        $pull: { favourites: restaurantsId },
      });
      return Response.json({ message: "success", user: updatedUser });
    }
    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      {
        $push: { favourites: restaurantsId },
      },
      { new: true }
    );
    return Response.json({ message: "success", user: updatedUser });
  } catch (error) {
    return Response.json({ message: error });
  }
};
