import { NextRequest } from "next/server";
import { RestaurantBranchModel } from "@/lib/models";
import { connectToMongoDB } from "@/lib/db";
import mongoose from "mongoose";

const toRadians = (degree: number) => degree * (Math.PI / 180);

const haversineDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) => {
  const R = 6371;
  const φ1 = toRadians(lat1);
  const φ2 = toRadians(lat2);
  const Δφ = toRadians(lat2 - lat1);
  const Δλ = toRadians(lon2 - lon1);

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
};

connectToMongoDB();
export const POST = async (req: NextRequest) => {
  try {
    const { location, restaurantId } = await req.json();
    const { coordinates } = location;
    const [userLongitude, userLatitude] = coordinates;

    console.log(userLongitude);
    console.log("hehe");

    if (!userLongitude || !userLatitude) {
      return new Response(
        JSON.stringify({ error: "Invalid coordinates provided." }),
        { status: 400 }
      );
    }
    const id = mongoose.Types.ObjectId.createFromHexString(restaurantId);
    const restaurantBranches = await RestaurantBranchModel.find({
      restaurantId: id,
    });

    if (!restaurantBranches.length) {
      return new Response(
        JSON.stringify({ error: "No branches found for this restaurant." }),
        { status: 404 }
      );
    }

    const closestBranch = await restaurantBranches
      .map((branch) => {
        const { location: branchLocation } = branch;
        const [branchLongitude, branchLatitude] = branchLocation.coordinates;

        const distance = haversineDistance(
          userLatitude,
          userLongitude,
          branchLatitude,
          branchLongitude
        );

        return {
          ...branch.toObject(),
          distance,
        };
      })
      .sort((a, b) => a.distance - b.distance)[0];

    return new Response(JSON.stringify({ closestBranch }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({
        error: "An error occurred while processing your request.",
      }),
      { status: 500 }
    );
  }
};
