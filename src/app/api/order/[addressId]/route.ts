import OrderModel from "@/lib/models/order";
import { NextRequest } from "next/server";

export const POST = async (
  _req: NextRequest,
  { params }: { params: Promise<{ deliveryId: string }> }
) => {
  const deliveryId = (await params).deliveryId;
  try {
    const orders = await OrderModel.find({ deliveryAddressId: deliveryId });
    return orders;
  } catch (err) {
    console.log(err);
  }
};
