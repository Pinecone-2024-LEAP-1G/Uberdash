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

  restaurantId: string;
};
type Heart = {
  restaurantId: string;
};

export const MenuItem = ({ image, name, restaurantId }: MenuTypes) => {
  const location = useLocation();

  const myLocation: Location = {
    type: "Point",
    coordinates: location.location
      ? (location.location as [number, number])
      : [0, 0],
  };

  const myProps: Heart = {
    restaurantId: restaurantId,
  };

  const [minDist, setMinDist] = useState<number>(0);
  const [rating, setRating] = useState<string>("");

  useEffect(() => {
    const ratingFetcher = async () => {
      try {
        const response = await axios.post("/api/restaurant/calculateRating", {
          restaurantId,
        });
        if (response.data.message === "No reviews") {
        } else {
          setRating(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };
    ratingFetcher();
  }, []);

  useEffect(() => {
    const dataFetcher = async () => {
      try {
        const response = await axios.post(`/api/restaurant-branch/distance`, {
          location: myLocation,
          restaurantId,
        });
        setMinDist(response.data.closestBranch.distance);
      } catch (error) {
        console.log(error);
      }
    };
    if (location.location[0] !== 0) {
      dataFetcher();
    }
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
          <HeartSvg {...myProps} />
        </div>
      </div>

      <div className="mt-3 gap-1 flex w-full justify-between items-center px-3">
        <div>
          <p className="text-[18px] font-medium text-ellipsis">{name}</p>
          {location && minDist !== 0 && (
            <p className="text-[14px] text-[#706f6f] font-thin ">
              Очих хугацаа : {Math.ceil(minDist * 3)} -{" "}
              {Math.ceil(minDist * 3) + 5} min
            </p>
          )}
        </div>
        {rating && (
          <div className="flex justify-center items-center w-8 h-8 border rounded-full bg-gray-300">
            <p className="text-sm font-light">{rating}</p>
          </div>
        )}
      </div>
    </div>
  );
};
