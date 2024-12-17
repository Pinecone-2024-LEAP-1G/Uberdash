"use client";

import { FastFoodFilter } from "@/components/FastFoodFilter";
import { Restaurants } from "@/components/Restuarants";
import { MenuCategories } from "@/components/MenuCategories";
import { CategoryFilter } from "@/components/CategoryFilter";
import { parseAsString, useQueryState } from "nuqs";
import { Search } from "@/components/Search";
import { useEffect, useState } from "react";
import axios from "axios";
import { RestrauntMenu } from "@/components";
import { MenuItemType } from "@/lib/types";

const Home = () => {
  const category = useQueryState("category", parseAsString);
  const search = useQueryState("search", parseAsString);

  const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);
  const [allItems, setAllItems] = useState<MenuItemType[]>([]);

  console.log(search[0]);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const response = await axios.get(`/api/menu-item`, {});
        const allMenuItems = response.data.menuItems;
        setAllItems(allMenuItems);
      } catch (error) {
        console.log(error);
      }
    };
    dataFetch();
  }, []);

  useEffect(() => {
    const dataFetch = () => {
      try {
        const filteredItems = allItems.filter((item: MenuItem) => {
          const searchValue = search[0]?.toLowerCase() || "";
          return item.name.toLowerCase().includes(searchValue);
        });
        setMenuItems(filteredItems);
      } catch (error) {
        console.log(error);
      }
    };
    dataFetch();
  }, [search[0]]);

  console.log(menuItems);

  return (
    <div className="container mx-auto max-w-[1200px] space-y-6">
      <MenuCategories />
      {category[0] && <CategoryFilter />}
      {search[0] && (
        <div className="grid grid-cols-4 my-4 gap-6">
          {menuItems?.map((menuItem, index) => {
            return (
              <div key={index} className="col-span-2">
                <RestrauntMenu
                  menuItem={menuItem}
                  percentage="80%"
                  like="(1100)"
                />
              </div>
            );
          })}
        </div>
      )}
      <FastFoodFilter />
      <Restaurants />
    </div>
  );
};

export default Home;
