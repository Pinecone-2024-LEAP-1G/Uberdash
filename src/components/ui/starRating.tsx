"use client";

import { Star } from "lucide-react";
import { useState } from "react";

export const Stars = () => {
  const [rating, setRating] = useState(4);

  const filledColor = "#F6BC2F";

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <button key={star} onClick={() => setRating(star)}>
          <Star
            color="#F6BC2F"
            fill={rating >= star ? filledColor : "transparent"}
          />
        </button>
      ))}
    </div>
  );
};
