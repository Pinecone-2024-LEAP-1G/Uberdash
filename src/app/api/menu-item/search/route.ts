import { NextRequest } from "next/server";
import { menuItemModel } from "@/lib/models";

export const POST = async (req: NextRequest) => {
  const { searchValue } = await req.json();

  try {
    if (searchValue.length != 0) {
      const responses = await menuItemModel.find({
        name: { $regex: searchValue, $options: "i" },
      });
      return Response.json({ message: "success", searchedItems: responses });
    } else {
      return Response.json({ message: "No Search" });
    }
  } catch (error) {
    return Response.json({ error });
  }
};
