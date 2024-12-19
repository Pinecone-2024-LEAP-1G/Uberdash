import { connectToMongoDB } from "@/lib/db";
import { AddressModel } from "@/lib/models/address.model";
import { NextRequest } from "next/server";

connectToMongoDB();

export const GET = async () => {
  try {
    const address = await AddressModel.find();

    return Response.json({ address });
  } catch (error) {
    return Response.json({ message: error });
  }
};

export const POST = async (request: NextRequest) => {
  const {
    userId,
    userName,
    phoneNumber,
    street,
    houseNumber,
    entranceNumber,
    appartmentNumber,
  } = await request.json();

  try {
    const address = await AddressModel.create({
      userId,
      userName,
      phoneNumber,
      street,
      houseNumber,
      entranceNumber,
      appartmentNumber,
    });

    return Response.json({ message: "success", address });
  } catch (error) {
    return Response.json({ message: error });
  }
};
