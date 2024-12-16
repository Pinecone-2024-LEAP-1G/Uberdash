"use client";

import { FastFoodFilter } from "@/components/FastFoodFilter";
import { Restaurants } from "@/components/Restuarants";
import { MenuCategories } from "@/components/MenuCategories";
import { CategoryFilter } from "@/components/CategoryFilter";
import { parseAsString, useQueryState } from "nuqs";
import { Search } from "@/components/Search";

const Home = () => {
  const category = useQueryState("category", parseAsString);
  const search = useQueryState("search", parseAsString);

  return (
    <div className="container mx-auto max-w-[1200px] space-y-6">
      {search[0] && <Search />}
      <MenuCategories />
      {category[0] && <CategoryFilter />}
      <FastFoodFilter />
      <Restaurants />
    </div>
  );
};

export default Home;
