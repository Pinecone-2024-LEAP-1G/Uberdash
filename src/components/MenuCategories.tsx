import { title } from "process";
import { MenuCategory } from "./MenuCategory";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const menuCategories = [
  {
    title: "Burger",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/Burgers.png",
  },
  {
    title: "Pizza",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/Grocery_v2.png",
  },
  {
    title: "Chicken",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/Chicken.png",
  },
  {
    title: "Korean",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/Korean.png",
  },
];

export const MenuCategories = () => {
  return (
    <Carousel className="w=-full flex items-center">
      <CarouselPrevious />
      <CarouselContent className="w-[1152px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="flex gap-3">
              {menuCategories.map((menuCategory, index) => {
                return (
                  <MenuCategory
                    key={index}
                    title={menuCategory.title}
                    image={menuCategory.image}
                  />
                );
              })}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  );
};
