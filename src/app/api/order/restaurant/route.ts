import { NextRequest } from "next/server";

import mongoose from "mongoose";
import { connectToMongoDB } from "@/lib/db";
import OrderModel from "@/lib/models/order";

connectToMongoDB();

export const POST = async (req: NextRequest) => {
  const { restaurantId } = await req.json();
  try {
    const id = mongoose.Types.ObjectId.createFromHexString(restaurantId);
    const orders = await OrderModel.aggregate([
      {
        $lookup: {
          from: "order-items",
          localField: "orderItems",
          foreignField: "_id",
          as: "orderItemsDetails",
        },
      },
      {
        $match: {
          "orderItemsDetails.restaurantId": id,
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "userDetails",
        },
      },
      {
        $project: {
          _id: 1,
          orderItemsDetails: 1,
          userDetails: 1,
          status: 1,
          createdAt: 1,
          totalPrice: 1,
          deliveryAddressId: 1,
        },
      },
    ]);

    if (!orders || orders.length === 0) {
      console.log("No orders found or no matching user details.");
    } else {
      console.log("Orders with user details:");
    }

    return Response.json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    return Response.json({ error: "An error occurred while fetching orders." });
  }
};
