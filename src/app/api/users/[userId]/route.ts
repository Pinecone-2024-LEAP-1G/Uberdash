import { connectToMongoDB } from "@/lib/db";
import { UserModel } from "@/lib/models";
import { NextRequest } from "next/server";

connectToMongoDB();

export const GET = async (
  _request: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) => {
  const { userId } = await params;

  try {
    const user = await UserModel.findById(userId).populate("favourites");

    return Response.json({ user });
  } catch (error) {
    return Response.json({ message: error });
  }
};

export const PUT = async (
  request: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) => {
  const { userId } = await params;

  const { restaurantsId } = await request.json();

  try {
    const user = await UserModel.findById(userId);
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
