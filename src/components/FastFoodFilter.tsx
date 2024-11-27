"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { MenuItemSlider } from "./MenuItemSlider";
import { MenuItemType } from "@/lib/types";

export const FastFoodFilter = () => {
  const [mainFood, setMainFood] = useState<MenuItemType[]>([]);

  const fetchdata = async () => {
    try {
      const response = await axios.get<{ menuItems: MenuItemType[] }>(
        `http://localhost:3000/api/menu-item`
      );
      console.log(response.data.menuItems);
      setMainFood(response.data.menuItems);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);
  const groupByCategory = () => {
    const categoryMap: { [key: string]: MenuItemType[] } = {};

    mainFood.forEach((item) => {
      const { categoryId } = item;
      if (!categoryMap[categoryId]) {
        categoryMap[categoryId] = [];
      }
      categoryMap[categoryId].push(item);
    });

    return categoryMap;
  };

  return (
    <div>
      {Object.keys(groupByCategory()).map((categoryId, index) => {
        const categoryItems = groupByCategory()[categoryId];
        return (
          <div key={index}>
            <h3>Category: {mainFood[0].name}</h3>
            <div>
              <MenuItemSlider
                categoryItems={categoryItems}
                name="Featured Fast Food"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
