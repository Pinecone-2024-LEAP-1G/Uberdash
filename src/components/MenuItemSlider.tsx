import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { MenuItem } from "./MenuItem";

export const MenuItemSlider = (props: { title: string }) => {
  const { title } = props;
  return (
    <div className="container mx-auto w-full max-w-[1200px]">
      <Carousel className="w-full ">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <div className="flex gap-1">
            <button>See all</button>
            <CarouselPrevious aria-label="Previous slide" />
            <CarouselNext aria-label="Next slide" />
          </div>
        </div>
        <CarouselContent className="-ml-1">
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/3 lg:basis-1/4"
            >
              <div className="p-1 w-[300px]">
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
