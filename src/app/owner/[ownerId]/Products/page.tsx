"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { MenuItemType } from "@/lib/types";
import { OwnerMenuItem } from "@/components/OwnerMenuItem";
import { CreateProduct } from "@/components/CreateProduct";
import { Plus } from "lucide-react";

const Dashboard = () => {
  const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);
  const [isCreateProduct, setIsCreateProduct] = useState<boolean>(false);
  const restaurantId = localStorage.getItem("restaurantId");
  const fetchdata = async () => {
    try {
      const response = await axios.post(`/api/menu-item/ownerId`, {
        restaurantId,
      });
      setMenuItems(response.data.menuItem);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const handleCreateProduct = () => {
    fetchdata();
    setIsCreateProduct(!isCreateProduct);
  };

  return (
    <div className="flex flex-col min-h-screen ">
      <div className="flex-grow w-full px-6 sm:px-8 md:px-12 py-6">
        <div className="bg-white rounded-2xl  p-8 w-full">
          {isCreateProduct && (
            <CreateProduct handleCreateProduct={handleCreateProduct} />
          )}

          <div className="flex flex-col gap-6">
            <button
              onClick={handleCreateProduct}
              className="flex items-center gap-4 px-5 py-3 rounded-xl border border-gray-300 hover:bg-gray-200 cursor-pointer transition-all ease-in-out"
            >
              <Plus size={20} />
              <span className="text-gray-900 text-lg font-semibold">
                Create Menu Item
              </span>
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full">
              {menuItems?.map((oneItem, index) => (
                <OwnerMenuItem
                  key={index}
                  menuItemId={oneItem._id}
                  fetchdata={fetchdata}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
