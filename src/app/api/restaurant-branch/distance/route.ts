import { NextRequest } from "next/server";
import { RestaurantBranchModel } from "@/lib/models";

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

export const POST = async (req: NextRequest) => {
  try {
    const { location } = await req.json();
    const { coordinates } = location;
    const [userLongitude, userLatitude] = coordinates;

    if (!userLongitude || !userLatitude) {
      return new Response(
        JSON.stringify({ error: "Invalid coordinates provided." }),
        { status: 400 }
      );
    }

    const restaurantBranches = await RestaurantBranchModel.find();

    const restaurantBranchesWithDistance = restaurantBranches.map((branch) => {
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
    });

    return new Response(
      JSON.stringify({ restaurantBranches: restaurantBranchesWithDistance }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        error: "An error occurred while processing your request.",
      }),
      { status: 500 }
    );
  }
};
