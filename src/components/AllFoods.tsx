"use client";

import { MenuItem } from "../components/MenuItem"; // Import MenuItem component
import { MenuItemType } from "@/lib/types";
import axios from "axios";
import { useState, useEffect } from "react";

export const AllFoods = () => {
  const [mainFood, setMainFood] = useState<MenuItemType[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get<{ menuItems: MenuItemType[] }>(
        `${
          process.env.NEXT_PUBLIC_URL ?? process.env.NEXT_PUBLIC_URL_PROD
        }/api/menu-item`
      );
      setMainFood(response.data.menuItems);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">All Foods</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mainFood.map((foodItem) => (
          <MenuItem
            key={foodItem._id}
            image={foodItem.image}
            name={foodItem.name}
            points={foodItem.price}
            bonus="Buy 1, Get 1 Free"
            restaurantId={""}
          />
        ))}
      </div>
    </div>
  );
};
