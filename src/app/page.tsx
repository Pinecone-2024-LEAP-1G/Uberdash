"use client";

import { AllFoods } from "@/components/AllFoods";
import { FastFoodFilter } from "@/components/FastFoodFilter";
import { AddOrderModal } from "@/components/AddOrderModal";
import { Restaurants } from "@/components/Restuarants";
import { MenuCategories } from "@/components/MenuCategories";
import { CategoryFilter } from "@/components/CategoryFilter";
import { parseAsString, useQueryState } from "nuqs";
import { RestaurantLike } from "@/components/RestaurantLike";

const Home = () => {
  const [category, setCategory] = useQueryState("category", parseAsString);

  return (
    <div className="container mx-auto max-w-[1200px] space-y-6">
      <MenuCategories />
      {category && <CategoryFilter />}
      <FastFoodFilter />
      <AllFoods />
      <AddOrderModal />
      <Restaurants />
    </div>
  );
};

export default Home;
