"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

type Heart = {
  restaurantId: string;
};

export const HeartSvg = ({ restaurantId }: Heart) => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {}, []);

  const handleClick = async () => {
    if (!isClicked) {
      try {
        const response = await axios.put("api/users/favourites", {
          restaurantId,
        });
        if (response.data.message === "in") {
          //amjilttai durtai restaurant heseg ruu nemlee gdg toast
        } else {
          //amjilttai durtai hesgees haslaa gdg button
        }
      } catch (error) {
        console.log(error); //error toast
      }
    }
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <svg
        className="w-5 h-5 transition-all duration-300"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
          fill={isClicked ? "red" : "none"}
          stroke={isClicked ? "red" : "white"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
