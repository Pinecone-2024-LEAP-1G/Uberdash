"use client";

import { FastFoodFilter } from "@/components/FastFoodFilter";
import FilterTags from "@/components/layout/FilterTags";

const Home = () => {
  return (
    <div className="container mx-auto max-w-[1200px]">
      <FilterTags />
      <FastFoodFilter />
    </div>
  );
};

export default Home;
