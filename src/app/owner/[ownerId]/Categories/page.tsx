"use client";
import { AdminSideBoard } from "@/components/AdminSideBoard";
import axios from "axios";
import { useEffect, useState } from "react";
import { Category } from "@/components/Category";

type Restaurant = {
  _id: string;
  name: string;
  image: string;
  banner: string;
  info: string;
  rating: number;
  ownerId: string;
};

type MenuItem = {
  _id: string;
  name: string;
  description: string;
  size: string;
  price: number;
  available: boolean;
  categoryId: string;
};

type category = {
  categoryId: String;
};

const restaurantOwnerId: String = "673e90415a6e8e222657bbb4";

const Categories = () => {
  const [restaurant, setRestaurant] = useState<Restaurant>();
  const [categoryId, setCategoryId] = useState<String>();

  const [menuItems, setMenuItems] = useState<MenuItem>();
  useEffect(() => {
    axios
      .post("http://localhost:3000/api/restaurant/getByOwnerId", {
        ownerId: restaurantOwnerId,
      })
      .then(function (response) {
        setCategoryId(response.data.menuItems[0].categoryId);
        setRestaurant(response.data.restaurant);
        setMenuItems(response.data.menuItems);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {categoryId && <Category categoryId={categoryId} />}
      <AdminSideBoard />
    </div>
  );
};
export default Categories;
