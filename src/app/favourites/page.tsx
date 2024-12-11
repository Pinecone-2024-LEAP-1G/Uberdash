"use client";

import { Restaurant } from "@/lib/models";
import axios from "axios";
import { useEffect, useState } from "react";
import { MenuItem } from "@/components";
const userId = "674fc7ab07515adf7b3a0428";

const Favourites = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  const getFavourites = async () => {
    try {
      const { data } = await axios.get(`/api/users/${userId}`);
      setRestaurants(data.user.favourites);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFavourites();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">All Stores</h2>
      <div className=" grid grid-cols-4  mx-auto ">
        {restaurants.map((restaurant) => (
          <MenuItem
            key={restaurant._id}
            restaurantId={restaurant._id}
            image={restaurant.banner}
            name={restaurant.name}
            points={4}
            bonus={""}
          />
        ))}
      </div>
    </div>
  );
};

export default Favourites;
