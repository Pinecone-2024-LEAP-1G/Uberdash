import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { MenuItem } from "./MenuItem";

type Items = {
  name: string;
  image: string;
  duration: string;
};

export const MenuItemSlider = (props: {
  name: string;
  categoryItems: Items[];
}) => {
  const { name, categoryItems } = props;
  return (
    <div className="container mx-auto w-full max-w-[1200px]">
      <Carousel className="w-full ">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">{name}</h1>
          <div className="flex gap-1">
            <button>See all</button>
            <CarouselPrevious aria-label="Previous slide" />
            <CarouselNext aria-label="Next slide" />
          </div>
        </div>
        <CarouselContent className="-ml-1">
          {categoryItems.map((categoryItem, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/3 lg:basis-1/4"
            >
              <div className="p-1 w-[300px]">
                <MenuItem
                  name={categoryItem.name}
                  image={categoryItem.image}
                  duration={categoryItem.duration}
                  points={4.3}
                  bonus="Buy 1,Get 1 Free"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
