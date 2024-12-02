"use client";
import { ChevronDown, ChevronUp, Clock3, Copy, MapPin } from "lucide-react";
import axios from "axios";
import { useState, useEffect } from "react";

type Location = {
  type: "Point";
  coordinates: [number, number];
};

export type restaurantBranchWithDistance = {
  _id: string;
  restaurantId: string;
  branchName: string;
  location: Location;
  distance: number;
};
const myLocation: Location = {
  type: "Point",
  coordinates: [47.918841, 106.917562],
};

type resId = {
  restaurantId: string;
};

export const RestaurantLocation = ({ restaurantId }: resId) => {
  const [openDetail, setOpenDetail] = useState<boolean>(false);
  const [branches, setBranches] = useState<restaurantBranchWithDistance[]>([]);
  useEffect(() => {
    const dataFetch = async () => {
      const response = await axios.post(
        "http://localhost:3000/api/restaurant-branch/distance",
        { location: myLocation, restaurantId }
      );
      setBranches(response.data.restaurantBranches);
    };
    dataFetch();
  }, []);
  console.log(branches);
  return (
    <div
      className="border rounded-2xl h-[334px] flex flex-col justify-end"
      style={{ backgroundImage: `url(/map.png)`, backgroundSize: "cover" }}
    >
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
