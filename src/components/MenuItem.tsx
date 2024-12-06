import axios from "axios";
import { HeartSvg } from "../components/ui/Heart-svg";
import { useEffect, useState } from "react";
import { Food } from "@/Providers/CartProvider";

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

type MenuTypes = {
  image: string;
  name: string;
  points: number;
  bonus: string;
  restaurantId: string;
};
type menuItemProps = {
  menuItem?: Food;
};

export const MenuItem = ({ image, name, points, restaurantId }: MenuTypes) => {
  const myLocation: Location = {
    type: "Point",
    coordinates: [47.918841, 106.917562],
  };
  const [minDist, setMinDist] = useState<number>(0);
  const [branchesWithDistance, setBranchesWithDistance] = useState<
    restaurantBranchWithDistance[]
  >([]);
  useEffect(() => {
    const dataFetcher = async () => {
      const response = await axios.post(
        "http://localhost:3001/api/restaurant-branch/distance",
        { location: myLocation, restaurantId }
      );
      setBranchesWithDistance(response.data.restaurantBranches);
    };
    dataFetcher();
  }, []);
  useEffect(() => {
    // eslint-disable-next-line prefer-const
    let dist: number[] = [];
    branchesWithDistance.map((oneBranch) => {
      dist.push(oneBranch.distance);
    });
    if (dist.length > 0) {
      setMinDist(Math.min(...dist));
    }
  }, [branchesWithDistance]);
  return (
    <div className="w-[288px] rounded-xl overflow-hidden ">
      <div
        className="w-full h-[130px] rounded-xl"
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex justify-between items-center pt-2 px-3 ">
          <p className="text-[#ffffff] bg-[#0e8345] text-ellipsis p-1 whitespace-nowrap rounded-sm text-[14px] "></p>
          <HeartSvg />
        </div>
      </div>

      <div className="mt-3 gap-1 flex w-full justify-between px-3">
        <div>
          <p className="text-[18px] font-medium text-ellipsis">{name}</p>
          <p className="text-[14px] text-[#706f6f] font-thin ">
            {Math.ceil(minDist * 3)} - {Math.ceil(minDist * 3) + 5} min
          </p>
        </div>
        <div className="rounded-[50%] w-[28px] flex items-center justify-center text-[12px] bg-slate-200 h-[28px]">
          {points}
        </div>
      </div>
    </div>
  );
};
