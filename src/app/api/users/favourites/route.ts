import { auth } from "@/lib/auth";
import { connectToMongoDB } from "@/lib/db";
import { UserModel } from "@/lib/models";
import { NextRequest } from "next/server";
connectToMongoDB();

export const GET = async () => {
  const session = await auth();

  if (!session) {
    return Response.json({ message: "Not authenticated" }, { status: 401 });
  }

  try {
    const users = await UserModel.findById({ _id: session.user.id })
      .populate({
        path: "favourites",
        model: "restaurants",
      })
      .exec();
    return Response.json({ users });
  } catch (error) {
    return Response.json({ message: error });
  }
};
export const PUT = async (request: NextRequest) => {
  const session = await auth();

  if (!session) {
    return Response.json({ message: "Not authenticated" }, { status: 401 });
  }
  const { restaurantId } = await request.json();

  try {
    const user = await UserModel.findById(session.user.id);
    const isIncluded = user?.favourites.includes(restaurantId);
    let message: string = "";
    if (isIncluded) {
      message = "out";
      const updatedUser = await UserModel.findByIdAndUpdate(
        session.user.id,
        {
          $pull: { favourites: restaurantId },
        },
        { new: true }
      );
      return Response.json({ message, user: updatedUser });
    }
    message = "in";
    const updatedUser = await UserModel.findByIdAndUpdate(
      session.user.id,
      {
        $push: { favourites: restaurantId },
      },
      { new: true }
    );
    return Response.json({ message, user: updatedUser });
  } catch (error) {
    return Response.json({ message: error });
  }
};
