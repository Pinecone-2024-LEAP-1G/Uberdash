"use client";
import { Heart } from "lucide-react";
import { useState } from "react";

export const RestaurantHero = (props: {
  name: string | undefined;
  banner: string | undefined;
  image: string | undefined;
}) => {
  const { name, banner, image } = props;

  const [isClicked, setIsClicked] = useState<boolean>(false);

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
        </div>
        <img
          src={image}
          className="rounded-full w-[76px] h-[76px] absolute left-2 top-[210px]"
        />
      </div>
      <div className="mt-12 mx-2 flex justify-between w-full">
        <h1 className="text-3xl font-semibold mb-4">{name}</h1>
      </div>
    </div>
  );
};
