"use client";

import { AllFoods } from "@/components/AllFoods";
import { FastFoodFilter } from "@/components/FastFoodFilter";
// import FilterTags from "@/components/layout/FilterTags";
import { AddOrderModal } from "@/components/AddOrderModal";
import { Restuarants } from "@/components/Restuarants";
import { MenuCategories } from "@/components/MenuCategories";
import { signIn } from "next-auth/react";

const Home = () => {
  return (
    <div className="container mx-auto max-w-[1200px] space-y-6">
      <MenuCategories />
      {/* <FilterTags /> */}
      <FastFoodFilter />
      <AllFoods />
      <AddOrderModal />
      {/* <AddOrderModal /> */}
    </div>
  );
};

export default Home;
