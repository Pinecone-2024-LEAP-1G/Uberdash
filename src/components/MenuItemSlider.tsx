import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { MenuItem } from "./MenuItem";

export const MenuItemSlider = () => {
  return (
    <div className="container mx-auto max-w-[1200px]">
      <Carousel className="w-full ">
        <div className="flex justify-between">
          <h1>National Brands</h1>
          <div className="flex gap-1">
            <button>See all</button>
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>
        <CarouselContent className="-ml-1">
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} className="pl-1 basis-1/4">
              <div className="p-1">
                <MenuItem
                  name=" Pappa Johns Burger"
                  image="https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvM2MzOTliMTJkYTliZDIzMjUyZmVhZjAyODk2MTBjYmMvNzgzNTQyOGIyODZhY2I1NzY0NmEyNTZjODk3YzBlOWUuanBlZw=="
                  duration=" 25-40 min"
                  points="4.3"
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
