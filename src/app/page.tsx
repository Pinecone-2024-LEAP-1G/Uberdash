"use client";

import { FastFoodFilter } from "@/components/FastFoodFilter";
import { Restaurants } from "@/components/Restuarants";
import { MenuCategories } from "@/components/MenuCategories";
import { CategoryFilter } from "@/components/CategoryFilter";
import { parseAsString, useQueryState } from "nuqs";
import { useSession } from "next-auth/react";

const Home = () => {
  const category = useQueryState("category", parseAsString);

  const { data: session } = useSession();
  console.log(session);

  return (
    <div className="container mx-auto max-w-[1200px] space-y-6">
      <MenuCategories />
      {category && <CategoryFilter />}
      <FastFoodFilter />
      <Restaurants />
    </div>
  );
};

export default Home;
