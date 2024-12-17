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
          ownerId: restaurantId,
        });
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
    <div className="p-4 flex gap-3 w-full">
      {isCreateProduct && (
        <CreateProduct handleCreateProduct={handleCreateProduct} />
      )}

      <div className="flex flex-col gap-4 items-start ">
        <div
          onClick={handleCreateProduct}
          className="flex gap-2 px-3 py-2 rounded-xl border border-gray-200 hover:bg-slate-300"
        >
          <Plus />
          <button> Create Product </button>
        </div>

        <div className="grid gap-y-6 gap-x-5 grid-cols-6">
          {menuItems?.map((oneItem, index) => {
            return <OwnerMenuItem key={index} menuItemId={oneItem._id} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
