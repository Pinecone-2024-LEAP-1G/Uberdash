"use client";
import { AdminSideBoard } from "@/components/AdminSideBoard";
import axios from "axios";
import { useEffect, useState } from "react";
import { Category } from "@/lib/types";
import { CategoryComp } from "@/components/Category";

const restaurantOwnerId: String = "673e90415a6e8e222657bbb4";

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/category")
      .then(function (response) {
        setCategories(response.data.category);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="p-4 flex gap-3 w-full">
      <AdminSideBoard />
      <div className="grid gap-x-5 grid-cols-6">
        {categories?.map((oneCategory, index) => {
          return <CategoryComp key={index} categoryId={oneCategory._id} />;
        })}
      </div>
    </div>
  );
};
export default Categories;
