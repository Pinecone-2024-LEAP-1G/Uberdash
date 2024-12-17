"use client";

import { AdminSideBar } from "@/components/AdminSideBoard";
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
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/category`);
        if (isMounted) {
          setCategories(response.data.category);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    return () => {
      isMounted = false; // Clean up for Strict Mode
    };
  }, []);

  const toggleCreateCategory = () => {
    setIsCreateCategory((prev) => !prev);
  };

  const newProps: DeleteType = {
    handleCreateCategory: toggleCreateCategory,
  };

  return (
    <div className="p-4 flex w-full">
      {isCreateCategory && <CreateCategoryComp {...newProps} />}

      <div className="flex flex-col gap-4 items-start">
        <div
          onClick={toggleCreateCategory}
          className="flex gap-2 px-3 py-2 rounded-xl border border-gray-200 hover:bg-slate-300"
        >
          <Plus />
          <button>Create Category</button>
        </div>

        <div className="grid gap-y-6 gap-x-5 grid-cols-6">
          {categories?.map((oneCategory, index) => {
            return <CategoryComp key={index} {...oneCategory} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
