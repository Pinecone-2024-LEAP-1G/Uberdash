"use client";
import { AdminSideBoard } from "@/components/AdminSideBoard";
import axios from "axios";
import { useEffect, useState } from "react";
import { Category } from "@/lib/types";
import { CategoryComp } from "@/components/Category";
import { Plus } from "lucide-react";
import { CreateCategoryComp } from "@/components/CreateCategory";

type DeleteType = {
  handleCreateCategory: () => void;
};

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isCreateCategory, setIsCreateCategory] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${
            process.env.NEXT_PUBLIC_URL ?? process.env.NEXT_PUBLIC_URL_PROD
          }/api/category`
        );
        setCategories(response.data.category);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log(categories);
  const CreateCategory = () => {
    setIsCreateCategory(!isCreateCategory);
  };

  const newProps: DeleteType = {
    handleCreateCategory: CreateCategory,
  };

  return (
    <div className="p-4 flex gap-3 w-full">
      {isCreateCategory && <CreateCategoryComp {...newProps} />}
      <AdminSideBoard />
      <div className="flex flex-col gap-4 items-start ">
        <div
          onClick={CreateCategory}
          className="flex gap-2 px-3 py-2 rounded-xl border border-gray-200 hover:bg-slate-300"
        >
          <Plus />
          <button> Create Category </button>
        </div>
        <div className="grid gap-y-6 gap-x-5 grid-cols-6">
          {categories?.map((oneCategory, index) => {
            return <CategoryComp key={index} categoryId={oneCategory._id} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Categories;
