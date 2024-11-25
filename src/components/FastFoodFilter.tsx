"use client";

import { useEffect, useState } from "react";
import { MenuItem } from "./MenuItem";
import axios from "axios";

type MenuTypes = {
  image: string;
  name: string;
  duration: string;
  points: string;
  bonus: string;
};

export const FastFoodFilter = ({
  image,
  name,
  duration,
  points,
  bonus,
}: MenuTypes) => {
  const [mainFood, setMainFood] = useState<MenuTypes[]>([]);

  const fetchdata = async () => {
    try {
      const response = await axios.get<{ foods: MenuTypes[] }>(
        `${process.env.NEXT_PUBLIC_MONGODB_URI}/foods`
      );

      setMainFood(response.data.foods);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return <div></div>;
};
//   <MenuItem image={} name={} duration={} points={} bonus={} />;
