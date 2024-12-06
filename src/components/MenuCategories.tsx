import { title } from "process";
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
  useEffect(() => {
    const dataFetch = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/category");
        setCategories(response.data.category);
      } catch (error) {
        console.log(error);
      }
    };
    dataFetch();
  }, []);

  return (
    <Carousel className="w=-full flex items-center">
      <CarouselPrevious />
      <CarouselContent className="w-[1152px]">
        <CarouselItem>
          <div className="flex gap-3 items-center">
            {categories.map((menuCategory, index) => {
              return (
                <MenuCategory
                  key={index}
                  id={menuCategory._id}
                  title={menuCategory.name}
                  image={menuCategory.image}
                />
              );
            })}
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  );
};
