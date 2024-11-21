import { DiscountModel } from "@/lib/models";
import { NextRequest } from "next/server";

export const GET = async () => {
  try {
    const discounts = await DiscountModel.find();

    return Response.json({ discounts });
  } catch (error) {
    return Response.json({ message: error });
  }
};

export const POST = async (request: NextRequest) => {
  const { name, discount_percent, time_used, max_used } = await request.json();

  try {
    const discount = await DiscountModel.create({
      name,
      discount_percent,
      time_used,
      max_used,
    });

    return Response.json({ message: "success", discount });
  } catch (error) {
    return Response.json({ message: error });
  }
};
