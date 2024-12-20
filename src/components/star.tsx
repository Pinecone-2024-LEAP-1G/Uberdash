"use client";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = () => {
  const [rating, setRating] = useState(0);
  const stars = [1, 2, 3, 4, 5];
  const handleChangeRating = (newRating: number) => {
    setRating(newRating);
  };
  return (
    <div className="flex">
      {stars?.map((star, index) => {
        return (
          <FaStar
            key={index}
            onClick={() => handleChangeRating(index + 1)}
            style={{ color: rating >= index + 1 ? "orange" : "gray" }}
            className="w-4 h-4"
          />
        );
      })}
    </div>
  );
};

export default Star;
