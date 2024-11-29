import { NextRequest } from "next/server";
import { menuItemModel } from "@/lib/models";

export const GET = async (_req: NextRequest) => {
  const { searchParams } = new URL(_req.url);

  try {
    const filterCriteria: Record<string, any> = {};

    const category = searchParams.get("category");
    if (category) {
      filterCriteria.categoryId = { $in: category.split(",") };
    }

    const rating = searchParams.get("rating");
    if (rating) {
      filterCriteria.rating = { $gte: Number(rating) };
    }

    const price = searchParams.get("price");
    if (price) {
      const priceRanges = price.split(",");
      const priceRangeMap = {
        1: { min: 1.99, max: 4.99 },
        2: { min: 5, max: 6.99 },
        3: { min: 7, max: 9.99 },
        4: { min: 10, max: Infinity },
      };

      const priceRange = priceRangeMap[Number(priceRanges[0])];
      filterCriteria.price = {
        $gte: priceRange.min,
        $lte: priceRange.max,
      };
    }

    const menuItems = await menuItemModel.find(filterCriteria);

    return Response.json(menuItems);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return Response.json({ message: error.message }, { status: 500 });
    }

    return Response.json(
      { message: "An unknown error occurred" },
      { status: 500 }
    );
  }
};
