"use client";

import { Star } from "lucide-react";

export type RatingInfoProps = {
  rating: number;
};

export const Stars = ({ rating }: RatingInfoProps) => {
  return (
    <div className="">
      <div className="flex my-1">
        <div className="rating flex justify-center items-center">
          <Star
            style={{ width: 20, height: 20 }}
            color="orange"
            fill={rating >= 1 ? "orange" : "white"}
          />
          <Star
            style={{ width: 20, height: 20 }}
            color="orange"
            fill={rating >= 2 ? "orange" : "white"}
          />
          <Star
            style={{ width: 20, height: 20 }}
            color="orange"
            fill={rating >= 3 ? "orange" : "white"}
          />
          <Star
            style={{ width: 20, height: 20 }}
            color="orange"
            fill={rating >= 4 ? "orange" : "white"}
          />
          <Star
            style={{ width: 20, height: 20 }}
            color="orange"
            fill={rating >= 5 ? "orange" : "white"}
          />
        </div>
      </div>
    </div>
  );
};
