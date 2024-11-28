"use client";

import { AllFoods } from "@/components/AllFoods";
import { FastFoodFilter } from "@/components/FastFoodFilter";
<<<<<<< HEAD
import { Restuarants } from "@/components/Restuarants";
import FilterTags from "@/components/layout/FilterTags";
=======
import { PopOverPrice } from "@/components/layout/PopOverPrice";
>>>>>>> 792da9e (pop over price component hiiv)

const Home = () => {
  return (
    <div className="container mx-auto max-w-[1200px] space-y-6">
      <PopOverPrice />
      <FastFoodFilter />
      <AllFoods />
      <Restuarants />
    </div>
  );
};

export default Home;
