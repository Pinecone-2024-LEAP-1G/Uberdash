import { NextRequest } from "next/server";
import { AddressModel } from "@/lib/models";
import { connectToMongoDB } from "@/lib/db";

connectToMongoDB();
export const GET = async (
  _req: NextRequest,
  { params }: { params: Promise<{ orderId: string }> }
) => {
  const orderId = (await params).orderId;
  try {
    const address = await AddressModel.findOne({ orderId: orderId });
    return Response.json({ address });
  } catch (error) {
    return Response.json({ message: error });
  }
};
