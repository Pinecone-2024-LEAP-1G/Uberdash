"use client";

import { AllFoods } from "@/components/AllFoods";
import { FastFoodFilter } from "@/components/FastFoodFilter";
// import FilterTags from "@/components/layout/FilterTags";
import { AddOrderModal } from "@/components/AddOrderModal";
import { Restuarants } from "@/components/Restuarants";
import { ToastModal } from "@/components/ToastModal";

const Home = () => {
  return (
    <div className="container mx-auto max-w-[1200px] space-y-6">
      {/* <FilterTags /> */}
      <FastFoodFilter />
      <AllFoods />
      <Restuarants />
      <AddOrderModal />
      <ToastModal />
    </div>
  );
};

export default Home;
