"use client";

// import { FastFoodFilter } from "@/components/FastFoodFilter";
import { Restaurants } from "@/components/Restuarants";
// import { MenuCategories } from "@/components/MenuCategories";
import { CategoryFilter } from "@/components/CategoryFilter";
import { parseAsString, useQueryState } from "nuqs";
import { useEffect, useState } from "react";
import axios from "axios";
import { RestrauntMenu } from "@/components";
import { MenuItemType } from "@/lib/types";
import { MostSaledFoods } from "@/components/MostSaledFoods";
import { MostRatedRestaurants } from "@/components/MostRatedRestaurants";

const Home = () => {
  const category = useQueryState("category", parseAsString);
  const search = useQueryState("search", parseAsString);

  const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);
  const [allItems, setAllItems] = useState<MenuItemType[]>([]);

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
        const filteredItems = allItems.filter((item: MenuItemType) => {
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

  return (
    <div className="container mx-auto max-w-[1200px] space-y-6">
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
      {category[0] && <CategoryFilter />}
      <MostSaledFoods />
      <MostRatedRestaurants />
      <Restaurants />
    </div>
  );
};

export default Home;
