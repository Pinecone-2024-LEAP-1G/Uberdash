import axios from "axios";
import { HeartSvg } from "../components/ui/Heart-svg";
import { useEffect, useState } from "react";
import { useLocation } from "@/Providers/LocationProvider";

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

export const MenuItem = ({ image, name, restaurantId }: MenuTypes) => {
  const data = useLocation();
  const { location } = data;
  const [minDist, setMinDist] = useState<number>(0);

  useEffect(() => {
    if (!location.coordinates[0]) return;

    const dataFetcher = async () => {
      try {
        const response = await axios.post(
          `${
            process.env.NEXT_PUBLIC_URL ?? process.env.NEXT_PUBLIC_URL_PROD
          }/api/restaurant-branch/distance`,
          { location: location, restaurantId }
        );

        setMinDist(response.data.closestBranch.distance);
      } catch (error) {
        console.log(error);
      }
    };
    dataFetcher();
  }, [location]);

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
      </div>
    </div>
  );
};
