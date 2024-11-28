"use client";

import { AllFoods } from "@/components/AllFoods";
import { FastFoodFilter } from "@/components/FastFoodFilter";
import { PopOverPrice } from "@/components/layout/PopOverPrice";

const Home = () => {
  return (
    <div className="container mx-auto max-w-[1200px] space-y-6">
      <PopOverPrice />
      <FastFoodFilter />
      <AllFoods />
    </div>
  );
};

export default Home;
