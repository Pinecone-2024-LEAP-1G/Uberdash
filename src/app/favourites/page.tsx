"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { Restaurant } from "@/lib/models";

const userId: string = "674fc7ab07515adf7b3a0428";

const Favourites = () => {
  const [favouriteRestaurants, setFavouriteRestaurants] = useState<
    Restaurant[]
  >([]);
  useEffect(() => {
    const datafetch = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/users/${userId}`
        );
        setFavouriteRestaurants(response.data.users[0].favourites);
      } catch (error) {
        console.log(error);
      }
    };
    datafetch();
  }, []);
  console.log(favouriteRestaurants);
  return (
    <div>
      <p></p>
    </div>
  );
};

export default Favourites;
