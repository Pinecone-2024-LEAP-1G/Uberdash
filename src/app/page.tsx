"use client";

import { FilterTags } from "@/components/layout/FilterTags";
import { Restuarants } from "@/components/Restuarants";

const Home = () => {
  return (
    <div className="container mx-auto max-w-[1200px] space-y-6">
      <FilterTags />
      <Restuarants />
    </div>
  );
};

export default Home;
