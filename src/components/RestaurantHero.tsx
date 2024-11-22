"use client";
import { Ellipsis, Heart, Info, UserPlus } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const RestaurantHero = (props: {
  name: string;
  description: string;
}) => {
  const { name, description } = props;

  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [more, setMore] = useState<boolean>(false);

  return (
    <div className="container max-w-[1200px] mx-auto">
      <div
        className="flex w-full h-[250px] rounded-xl justify-end items-start pt-4 pr-6 relative"
        style={{
          backgroundImage: `url(https://tb-static.uber.com/prod/image-proc/processed_images/aa5e66633bde7518be5c3ccc2d7b359f/30be7d11a3ed6f6183354d1933fbb6c7.jpeg)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex gap-2 ">
          <button className="bg-white p-2 rounded-full">
            <Heart
              style={{ width: 16, height: 16 }}
              onClick={() => setIsClicked(!isClicked)}
              fill={`${isClicked ? "black" : "white"}`}
            />
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="bg-white p-2 rounded-full">
                <Ellipsis style={{ width: 16, height: 16 }} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuCheckboxItem>
                <div className="flex gap-2">
                  <UserPlus />
                  Start group order
                </div>
              </DropdownMenuCheckboxItem>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem>
                <div
                  className="flex gap-2"
                  onClick={() => setIsClicked(!isClicked)}
                >
                  <Heart fill={`${!isClicked ? "white" : "black"}`} />
                  Add favorites
                </div>
              </DropdownMenuCheckboxItem>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem>
                <div className="flex gap-2">
                  <Info fill="black" color="white" />
                  Store info
                </div>
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <img
          src="https://tb-static.uber.com/prod/image-proc/processed_images/37d9c66cc6cf8d5376416ea725980b7d/029e6f4e0c81c14572126109dfe867f3.jpeg"
          className="rounded-full w-[76px] h-[76px] absolute left-2 top-[210px]"
        />
      </div>
      <div className="mt-12 mx-2 ">
        <div className="flex justify-between">
          <div className="flex flex-col ">
            <div className="flex justify-between">
              <h1 className="text-3xl font-semibold">{name}</h1>
              <div className="flex gap-4">
                <Tabs defaultValue="delivery" className="w-[200px]">
                  <TabsList className="grid w-full grid-cols-2 rounded-3xl">
                    <TabsTrigger value="delivery" className=" rounded-3xl">
                      Delivery
                    </TabsTrigger>
                    <TabsTrigger value="pickup" className=" rounded-3xl">
                      Pickup
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
                <Button className="text-black bg-[#f3f3f3] hover:bg-gray-200 rounded-3xl">
                  <UserPlus fill="black" />
                  Group order
                </Button>
              </div>
            </div>
            <div className="mt-4 w-2/3">
              <p
                className={`  text-sm w-full ${
                  !more ? "overflow-hidden h-10" : "overflow-none h-auto"
                }`}
              >
                {description}
              </p>
              <span
                className="text-sm font-bold"
                role="button"
                onClick={() => setMore(!more)}
              >
                {`${!more ? "More" : "Less"}`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
