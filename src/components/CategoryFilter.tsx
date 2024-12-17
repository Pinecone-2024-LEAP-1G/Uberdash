"use client";

import { Restaurant } from "@/lib/models";
import axios from "axios";
import { useEffect, useState } from "react";
import { MenuItem } from "./MenuItem";
import Link from "next/link";
import { useQueryState, parseAsString } from "nuqs";

type newRestaurant = {
  _id: Restaurant;
};

export const CategoryFilter = () => {
  const [restaurants, setRestaurants] = useState<newRestaurant[]>([]);
  const category = useQueryState("category", parseAsString);
  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const restaraunts = await axios.post(`/api/restaurant/getByCategory`, {
          categoryId: category[0],
        });
        setRestaurants(restaraunts.data.restaurantIds);
      } catch (error) {
        console.log(error);
      }
    };
    getRestaurants();
  }, [category[0]]);
  return (
    <div className="mt-6 gap-3">
      <div className="text-xl mt-2 font-bold mx-auto max-w-[1200px] mb-2">
        Үр дүн
      </div>
      <div className=" grid grid-cols-4 max-w-[1200px] mx-auto gap-10">
        {restaurants?.map((restaurant) => (
          <Link
            href={`/restaurant/${restaurant._id._id}`}
            key={restaurant._id._id}
          >
            <MenuItem
              restaurantId={restaurant._id._id}
              image={restaurant._id.banner}
              name={restaurant._id.name}
              points={4}
              bonus={""}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
