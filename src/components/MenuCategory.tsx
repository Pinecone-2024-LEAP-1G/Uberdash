"use client";

import { parseAsString, useQueryState } from "nuqs";

type MenuCategoryProps = {
  title: string;
  image: string;
  id: string;
};

export const MenuCategory = (props: MenuCategoryProps) => {
  const { title, image, id } = props;

  const [category, setCategory] = useQueryState("category", parseAsString);

  const handleClick = () => {
    setCategory(id);
  };
  const border: string = category == id ? "border-2 border-gray-300" : "";
  return (
    <div
      onClick={handleClick}
      className={` flex flex-col items-center w-fit cursor-pointer ml-2 rounded-xl p-2 ${border}`}
    >
      <img src={image} className="h-16 w-16 rounded-xl" />
      <p className="text-xs">{title}</p>
    </div>
  );
};
