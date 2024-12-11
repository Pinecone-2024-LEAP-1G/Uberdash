"use client";

import { Restaurant } from "@/lib/models";
import axios from "axios";
import { useEffect, useState } from "react";
import { MenuItem } from "./MenuItem";
import Link from "next/link";
import { SkeletonCard } from "@/components/SkeletonCard";

export const Restaurants = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const { data } = await axios.get<{ restaurants: Restaurant[] }>(
          "/api/restaurant"
        );
        setRestaurants(data.restaurants);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getRestaurants();
  }, []);

  return (
    <div className="m-6 gap-3">
      <div className="text-4xl mt-2 font-bold mx-auto max-w-[1200px] m-6">
        Бүх ресторанууд
      </div>
      <div className="grid grid-cols-4 max-w-[1200px] mx-auto gap-10">
        {loading
          ? Array(14)
              .fill(null)
              .map((_, index) => <SkeletonCard key={index} />)
          : restaurants.map((restaurant) => (
              <Link href={`/restaurant/${restaurant._id}`} key={restaurant._id}>
                <MenuItem
                  restaurantId={restaurant._id}
                  image={restaurant.banner}
                  name={restaurant.name}
                  points={4}
                  bonus={""}
                />
              </Link>
            ))}
      </div>
    </div>
  );
};
