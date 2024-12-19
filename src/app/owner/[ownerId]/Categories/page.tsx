"use client";

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
      isMounted = false;
    };
  }, []);

  const toggleCreateCategory = () => {
    setIsCreateCategory((prev) => !prev);
  };

  const newProps: DeleteType = {
    handleCreateCategory: toggleCreateCategory,
  };

  return (
    <div className="flex h-screen w-full bg-gray-50">
      {/* Sidebar Placeholder */}
      <aside className="w-[250px] lg:w-[300px] bg-white shadow-md"></aside>

      {/* Main Content */}
      <div className="flex-grow p-6">
        <div className="bg-white rounded-lg shadow-lg p-6 h-full">
          {isCreateCategory && <CreateCategoryComp {...newProps} />}

          <div className="flex flex-col gap-6">
            {/* Header Section */}
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-semibold text-gray-800">
                Categories
              </h1>
              <div
                onClick={toggleCreateCategory}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 cursor-pointer"
              >
                <Plus size={16} />
                <button>Create Category</button>
              </div>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full">
              {categories?.map((oneCategory, index) => (
                <CategoryComp key={index} {...oneCategory} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
