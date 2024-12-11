"use client";

import { FastFoodFilter } from "@/components/FastFoodFilter";
import { Restaurants } from "@/components/Restuarants";
import { MenuCategories } from "@/components/MenuCategories";
import { CategoryFilter } from "@/components/CategoryFilter";
import { parseAsString, useQueryState } from "nuqs";
import { Toaster } from "@/components/ui/toaster";
import { ToastModal } from "@/components/ToastModal";

const Home = () => {
  const category = useQueryState("category", parseAsString);

  return (
    <div className="container mx-auto max-w-[1200px] space-y-6">
      <MenuCategories />
      {category && <CategoryFilter />}
      <FastFoodFilter />
      <Restaurants />
      <ToastModal />
    </div>
  );
};

export default Home;
