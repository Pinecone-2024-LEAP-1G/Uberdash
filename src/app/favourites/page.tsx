"use client";

import { Restaurant } from "@/lib/models";
import axios from "axios";
import { useEffect, useState } from "react";
import { MenuItem } from "@/components";

const Favourites = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    const getFavourites = async () => {
      try {
        const { data } = await axios.get(`/api/users/favourites`);
        setRestaurants(data.users.favourites);
      } catch (error) {
        console.log(error);
      }
    };
    getFavourites();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Миний Дуртай Ресторанууд</h2>
      <div className=" grid grid-cols-4  mx-auto  ">
        {restaurants.map((restaurant, index) => (
          <MenuItem
            key={index}
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
