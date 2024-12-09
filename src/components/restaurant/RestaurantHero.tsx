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
import { Button } from "../ui/button";

export const RestaurantHero = (props: {
  name: string | undefined;
  banner: string | undefined;
  image: string | undefined;
}) => {
  const { name, banner, image } = props;

  const [isClicked, setIsClicked] = useState<boolean>(false);
  console.log("hh");
  return (
    <div className="container max-w-[1200px] mx-auto">
      <div
        className="flex w-full h-[250px] rounded-xl justify-end items-start pt-4 pr-6 relative"
        style={{
          backgroundImage: `url(${banner})`,
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
          <button className="bg-white p-2 rounded-full"></button>
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
          src={image}
          className="rounded-full w-[76px] h-[76px] absolute left-2 top-[210px]"
        />
      </div>
      <div className="mt-12 mx-2 flex justify-between w-full">
        <h1 className="text-3xl font-semibold mb-4">{name}</h1>
        <div className="flex gap-4">
          <Button className="text-black bg-[#f3f3f3] hover:bg-gray-200 rounded-3xl">
            <UserPlus fill="black" />
            Group order
          </Button>
        </div>
      </div>
    </div>
  );
};
