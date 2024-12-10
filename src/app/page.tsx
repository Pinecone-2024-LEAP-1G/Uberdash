"use client";

import { FastFoodFilter } from "@/components/FastFoodFilter";
import { Restaurants } from "@/components/Restuarants";
import { MenuCategories } from "@/components/MenuCategories";
import { CategoryFilter } from "@/components/CategoryFilter";
import { parseAsString, useQueryState } from "nuqs";
import { ChangeEventHandler, useState } from "react";

const Home = () => {
  const category = useQueryState("category", parseAsString);

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

const Parent = () => {
  const [count, setCount] = useState(1);
  const onSubmit = () => {
    console.log(count);
  };

  const handleChangeCount = (value: number) => {
    setCount(value);
  };
  return (
    <div>
      <Quantity value={count} onChange={handleChangeCount} />
      <button onClick={onSubmit}>sagslah</button>
    </div>
  );
};

const Quantity = ({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) => {
  const handleChangeValue: ChangeEventHandler<HTMLSelectElement> = (event) => {
    onChange(Number(event.target.value));
  };

  return (
    <div>
      <select value={value} onChange={handleChangeValue}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
    </div>
  );
};
