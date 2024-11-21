"use client";

import {
  CircleX,
  Ellipsis,
  Heart,
  Info,
  Italic,
  Keyboard,
  Search,
  UserPlus,
} from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const RestaurantHero = (props: { name: string }) => {
  const { name } = props;

  const [search, setSearch] = useState("");
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
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
              fill={`${isClicked === true ? "black" : "white"}`}
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
          <h1 className="text-3xl font-semibold">{name}</h1>

          <div className="bg-[#f3f3f3] rounded-3xl w-[360px] flex">
            <div className="flex justify-center items-center w-8 h-8x">
              <Search style={{ width: 14, height: 14 }} />
            </div>
            <input
              style={{ fontSize: 14 }}
              type="text"
              placeholder={`Search in ${name}`}
              className="bg-[#f3f3f3] rounded-3xl w-full "
              value={search}
              onChange={handleSearch}
            />
            <div
              className={` justify-center items-center w-8 h-8  ${
                search === "" ? "hidden" : "flex"
              }`}
            >
              <CircleX
                role="button"
                fill="black"
                color="white"
                style={{ width: 16, height: 16 }}
                onClick={() => setSearch("")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
