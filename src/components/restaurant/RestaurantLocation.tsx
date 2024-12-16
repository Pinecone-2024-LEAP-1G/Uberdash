"use client";
import { ChevronDown, ChevronUp, Clock3, Copy, MapPin } from "lucide-react";
import axios from "axios";
import { useState, useEffect } from "react";
import { ObjectId } from "mongoose";
// import Map from "./RestaurantMap";

type Location = {
  type: "Point";
  coordinates: [number, number];
};

const myLocation: Location = {
  type: "Point",
  coordinates: [47.918842, 106.917562],
};

type RestaurantLocationProps = {
  restaurantId: string;
};

export const RestaurantLocation = ({
  restaurantId,
}: RestaurantLocationProps) => {
  const [openDetail, setOpenDetail] = useState<boolean>(false);
  useEffect(() => {
    const dataFetch = async () => {
      const response = await axios.post(`/api/restaurant-branch/distance`, {
        location: myLocation,
        restaurantId,
      });
      console.log(response.data.restaurantBranches);
    };
    dataFetch();
  }, []);

  return (
    <div className="border rounded-2xl h-[334px] flex flex-col justify-end">
      {/* <Map /> */}
      <div className={`bg-white ${openDetail ? "hidden" : "flex"}`}>
        <div className="w-20 h-16 items-center justify-center flex">
          <MapPin width={18} height={18} />
        </div>
        <div className="border-b flex justify-between items-center w-full">
          <div>
            <p>Location</p>
            <p className="font-thin text-sm text-[#4B4B4B]">Location</p>
          </div>
          <div className="w-16 h-16 items-center justify-center flex">
            <Copy width={16} height={16} />
          </div>
        </div>
      </div>
      <div
        className={`bg-white flex items-start flex-col ${
          openDetail ? "h-full rounded-2xl" : "rounded-b-2xl"
        }`}
      >
        <div className="flex w-full" onClick={() => setOpenDetail(!openDetail)}>
          <div className="w-20 h-16 items-center justify-center flex">
            <Clock3 width={16} height={16} />
          </div>
          <div
            className={`flex justify-between w-full items-center ${
              openDetail ? "border-b" : ""
            }`}
          >
            <div className="">
              <p>Open</p>
              <p className="font-thin text-sm text-[#4B4B4B]">
                Open until 11:59 PM
              </p>
            </div>
            <div className="w-16 h-16 items-center justify-center flex">
              <ChevronUp
                width={16}
                height={16}
                className={`${openDetail ? "hidden" : ""}`}
              />
              <ChevronDown
                width={16}
                height={16}
                className={`${!openDetail ? "hidden" : ""}`}
              />
            </div>
          </div>
        </div>
        <div className={`w-full ${!openDetail ? "hidden" : "flex"}`}>
          <div className="w-20 h-16 items-center justify-center flex"></div>
          <div
            className={`flex justify-between w-full items-center ${
              openDetail ? "border-b" : ""
            }`}
          >
            <div className="">
              <p>Sunday-Wednesday</p>
              <p className="font-thin text-sm text-[#4B4B4B]">
                10:00 AM - 11:59 PM
              </p>
            </div>
          </div>
        </div>
        <div className={`w-full ${!openDetail ? "hidden" : "flex"}`}>
          <div className="w-20 h-16 items-center justify-center flex"></div>
          <div
            className={`flex justify-between w-full items-center ${
              openDetail ? "border-b" : ""
            }`}
          >
            <div className="">
              <p>Thursday - Saturday</p>
              <p className="font-thin text-sm text-[#4B4B4B]">
                10:00 AM - 1:00 AM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
