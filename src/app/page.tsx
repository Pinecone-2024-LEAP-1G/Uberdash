"use client";

import { AllFoods } from "@/components/AllFoods";
import { FastFoodFilter } from "@/components/FastFoodFilter";
import { FilterTags } from "@/components/layout/FilterTags";
import { PopOverPrice } from "@/components/layout/PopOverPrice";
import { Restuarants } from "@/components/Restuarants";

const Home = () => {
  return (
    <div className="container mx-auto max-w-[1200px] space-y-6">
      <FilterTags />
    </div>
  );
};

export default Home;
