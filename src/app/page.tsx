"use client";

import { AllFoods } from "@/components/AllFoods";
import { FastFoodFilter } from "@/components/FastFoodFilter";
import { AddOrderModal } from "@/components/AddOrderModal";
import { Restaurants } from "@/components/Restuarants";
import { MenuCategories } from "@/components/MenuCategories";


const Home = () => {
  return (
    <div className="container mx-auto max-w-[1200px] space-y-6">
      <MenuCategories />
      <FastFoodFilter />
      <AllFoods />
      <AddOrderModal />
      <Restaurants />
    </div>
  );
};

export default Home;
