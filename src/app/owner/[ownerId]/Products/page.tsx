"use client";

import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { MenuItemType } from "@/lib/types";
import { OwnerMenuItem } from "@/components/OwnerMenuItem";
import { CreateProduct } from "@/components/CreateProduct";

const Dashboard = () => {
  const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);
  const [isCreateProduct, setIsCreateProduct] = useState<boolean>(false);

  useEffect(() => {
    const restaurantId = localStorage.getItem("restaurantId");
    const fetchdata = async () => {
      try {
        const response = await axios.post(`/api/menu-item/ownerId`, {
          restaurantId,
        });
        console.log(response);
        setMenuItems(response.data.menuItem);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);

  const handleCreateProduct = () => {
    setIsCreateProduct(!isCreateProduct);
  };

  return (
    <div className="p-6 flex flex-col items-center w-full">
      {isCreateProduct && (
        <CreateProduct handleCreateProduct={handleCreateProduct} />
      )}

      <div className="w-full max-w-4xl bg-white p-6 rounded-xl shadow-lg flex flex-col gap-6">
        <div
          onClick={handleCreateProduct}
          className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-300 hover:bg-slate-200 cursor-pointer"
        >
          <Plus />
          <span className="text-gray-800 text-lg font-semibold">
            Хоолны цэс үүсгэх
          </span>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {menuItems?.map((oneItem, index) => (
            <OwnerMenuItem key={index} menuItemId={oneItem._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
