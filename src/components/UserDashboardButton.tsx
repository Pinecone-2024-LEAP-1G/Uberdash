"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SkeletonLoader = () => (
  <div className="w-full h-10 bg-gray-300 rounded-md animate-pulse" />
);

interface Restaurant {
  id: string;
  name: string;
  _id: string;
}

const UserDashboardButton = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRestaurants = async () => {
      if (!session?.user?.id) return;

      try {
        const response = await fetch("/api/restaurant/getRestaurantsOfOwner", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ownerId: session.user.id }),
        });

        const data = await response.json();

        if (data.restaurants) {
          setRestaurants(data.restaurants);
        } else {
          console.log("No restaurants found");
        }
      } catch (error) {
        console.error("Failed to fetch restaurants:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, [session?.user?.id]);

  if (loading) {
    return (
      <div className="mt-4">
        <SkeletonLoader />
        <SkeletonLoader />
      </div>
    );
  }

  if (!restaurants.length) {
    return <div>No restaurants found</div>;
  }

  return (
    <div className="mt-4">
      {restaurants.map((restaurant) => (
        <button
          key={restaurant._id}
          onClick={() => router.push(`/owner/${restaurant._id}`)}
          className="w-full bg-[#F3F3F3] rounded-full py-2 text-center mb-2"
        >
          {restaurant.name}
        </button>
      ))}
    </div>
  );
};

export default UserDashboardButton;
