"use client";

import { MenuItem } from "./MenuItem";
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
  return (
    <div>
      <MenuItem image={} name={} duration={} points={} bonus={} />
    </div>
  );
};
