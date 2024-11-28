"use client";

import { Restaurant } from "@/lib/models";
import axios from "axios";
import { useEffect, useState } from "react";
import { MenuItem } from "./MenuItem";

export const Restuarants = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    const getRestuarants = async () => {
      try {
        const { data } = await axios.get<{ restaurants: Restaurant[] }>(
          "/api/restaurant"
        );

        setRestaurants(data.restaurants);
      } catch (error) {
        console.log(error);
      }
    };
    getRestuarants();
  }, []);

  return (
    <div className="m-6">
      <div className="text-4xl mt-2 font-bold mx-auto max-w-[1200px] m-6">
        All stores
      </div>

      <div className=" grid grid-cols-4 max-w-[1200px] mx-auto ">
        {restaurants.map((restaurant) => (
          <MenuItem
            key={restaurant._id}
            image={restaurant.banner}
            name={restaurant.name}
            duration={"10-20min"}
            points={"4,7"}
          />
        ))}
      </div>
    </div>
  );
};
