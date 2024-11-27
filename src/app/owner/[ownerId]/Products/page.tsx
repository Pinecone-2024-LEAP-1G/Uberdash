"use client";

import { Plus } from "lucide-react";
import { AdminSideBoard } from "@/components/AdminSideBoard";
import { useEffect, useState } from "react";
import axios from "axios";
import { MenuItemType } from "@/lib/types";
import { OwnerMenuItem } from "@/components/OwnerMenuItem";

import { CreateProduct } from "@/components/CreateProduct";
import { Delete } from "@/components/Delete";

const restaurantOwnerId: String = "673e90415a6e8e222657bbb4";

const Dashboard = () => {
  const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);

  const [isCreateProduct, setIsCreateProduct] = useState<boolean>(false);

  const [isDeleteProduct, setIsDeleteProduct] = useState<boolean>(false);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/menu-item/ownerId",
          { ownerId: restaurantOwnerId }
        );
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

  const handleDelete = () => {
    setIsDeleteProduct(!isDeleteProduct);
  };
  return (
    <div className="p-4 flex gap-3 w-full">
      {isDeleteProduct && <Delete handleDelete={handleDelete} />}
      {isCreateProduct && (
        <CreateProduct handleCreateProduct={handleCreateProduct} />
      )}
      <AdminSideBoard />
      <div className="flex flex-col gap-4 items-start ">
        <div
          onClick={handleCreateProduct}
          className="flex gap-2 px-3 py-2 rounded-xl border border-gray-200 hover:bg-slate-300"
        >
          <Plus />
          <button> Create Product </button>
        </div>

        <div className="grid gap-x-5 grid-cols-6">
          {menuItems?.map((oneItem, index) => {
            return <OwnerMenuItem key={index} menuItemId={oneItem._id} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
