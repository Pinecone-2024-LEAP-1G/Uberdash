"use client";

import { Star } from "lucide-react";
import moment from "moment";

export type RatingInfoProps = {
  name?: string;
  rating: number;
  date: string;
};

export const RatingStar = ({ name, rating, date }: RatingInfoProps) => {
  const formattedDate = moment(date).format("YYYY/MM/DD");

  return (
    <div className="">
      <div className="flex my-1">
        <div className="rating flex justify-center items-center">
          <Star
            style={{ width: 14, height: 14 }}
            color="black"
            fill={rating >= 1 ? "black" : "white"}
          />
          <Star
            style={{ width: 14, height: 14 }}
            color="black"
            fill={rating >= 2 ? "black" : "white"}
          />
          <Star
            style={{ width: 14, height: 14 }}
            color="black"
            fill={rating >= 3 ? "black" : "white"}
          />
          <Star
            style={{ width: 14, height: 14 }}
            color="black"
            fill={rating >= 4 ? "black" : "white"}
          />
          <Star
            style={{ width: 14, height: 14 }}
            color="black"
            fill={rating >= 5 ? "black" : "white"}
          />
        </div>
        <span>&nbsp;•&nbsp;</span>
        <p className="font-medium text-sm">{name}</p>
        <span>&nbsp;•&nbsp;</span>
        <p className="text-gray-500 text-sm">{formattedDate}</p>
      </div>
    </div>
  );
};
