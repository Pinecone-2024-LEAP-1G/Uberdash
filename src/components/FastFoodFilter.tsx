"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { MenuItemSlider } from "./MenuItemSlider";
import { MenuItemType } from "@/lib/types";

export const FastFoodFilter = () => {
  const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);

  const fetchMenuItems = async () => {
    try {
      const response = await axios.get<{ menuItems: MenuItemType[] }>(
        "http://localhost:3000/api/menu-item"
      );
      setMenuItems(response.data.menuItems);
    } catch (error) {
      console.error("Error fetching menu items:", error);
    }
  };

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const groupMenuItemsByCategory = () => {
    const groupedItems: Record<string, MenuItemType[]> = {};

    menuItems.forEach((item) => {
      const categoryId = item.categoryId.toString();
      if (!groupedItems[categoryId]) {
        groupedItems[categoryId] = [];
      }
      groupedItems[categoryId].push(item);
    });

    return groupedItems;
  };

  const groupedItems = groupMenuItemsByCategory();

  return (
    <div>
      {Object.entries(groupedItems).map(([categoryId, items]) => (
        <div key={categoryId}>
          <h3>Category: {items[0]?.name || "Unnamed Category"}</h3>
          <MenuItemSlider categoryItems={items} name="Featured Fast Food" />
        </div>
      ))}
    </div>
  );
};
