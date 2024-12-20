"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { MenuItemType } from "@/lib/types";
import { MenuItemLastCard } from "./restaurant/MenuItemLastCard";

type FoodWithOrder = {
  totalQuantity: number;
  _id: MenuItemType;
};

export const MostSaledFoods = () => {
  const [mostOrdered, setMostOrdered] = useState<FoodWithOrder[]>([]);
  useEffect(() => {
    const dataFetch = async () => {
      try {
        const response = await axios.get("/api/menu-item/mostOrdered");
        setMostOrdered(response.data.mostOrderedItems);
      } catch (error) {
        console.log(error); // aldaa toaster
      }
    };
    dataFetch();
  }, []);
  const show = mostOrdered.slice(0, 5);
  return (
    <div className="flex flex-col">
      <p className="font-semibold text-2xl"> Эрэлттэй хоолнууд </p>
      <div className="grid grid-cols-5 my-4 gap-6">
        {show?.map((menuItem, index) => {
          return <MenuItemLastCard menuItem={menuItem._id} key={index} />;
        })}
      </div>
    </div>
  );
};
