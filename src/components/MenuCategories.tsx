"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { MenuCategory } from "./MenuCategory";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import axios from "axios";
import { useEffect, useState } from "react";
import { Category } from "@/lib/types";

export const MenuCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const response = await axios.get(`/api/category`);
        setCategories(response.data.category);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    dataFetch();
  }, []);

  const skeletons = Array(14).fill(
    <Skeleton key={Math.random()} className="h-[60px] w-[60px] rounded-lg" />
  );

  return (
    <Carousel className="w-full flex items-center">
      <CarouselPrevious />
      <CarouselContent className="w-[1152px]">
        <CarouselItem>
          <div className="flex gap-3 items-center">
            {loading
              ? skeletons.map((skeleton, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center w-fit cursor-pointer ml-2 rounded-xl p-2"
                  >
                    {skeleton}
                  </div>
                ))
              : categories.map((menuCategory) => (
                  <MenuCategory
                    key={menuCategory._id}
                    id={menuCategory._id}
                    title={menuCategory.name}
                    image={menuCategory.image}
                  />
                ))}
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  );
};
