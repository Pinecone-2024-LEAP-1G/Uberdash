"use client";

import { AllFoods } from "@/components/AllFoods";
import { FastFoodFilter } from "@/components/FastFoodFilter";
import { Restuarants } from "@/components/Restuarants";
import FilterTags from "@/components/layout/FilterTags";

const Home = () => {
  return (
    <div className="container mx-auto max-w-[1200px] space-y-6">
      <FilterTags />
      <FastFoodFilter />
      <AllFoods />
      <Restuarants />
    </div>
  );
};

export default Home;
