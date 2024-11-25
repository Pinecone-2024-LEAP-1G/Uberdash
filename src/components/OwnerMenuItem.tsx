import { MenuItemType } from "@/lib/types";
import axios from "axios";
import { useEffect, useState } from "react";
import { Pen, BadgeMinus } from "lucide-react";

type ItemId = {
  menuItemId: string;
};

export const OwnerMenuItem = ({ menuItemId }: ItemId) => {
  const [menuItem, setMenuItem] = useState<MenuItemType>();
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/menu-item/${menuItemId}`
        );
        setMenuItem(response.data.menuItem);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);

  return (
    <div className="flex flex-col gap-2 rounded-lg border border-gray-300 items-center">
      <img src={menuItem?.image} className="w-56 h-44 rounded-lg  " />
      <p className="text-center font-medium w-48 flex items-center text-base justify-center">
        {menuItem?.name}
      </p>
      <div className="flex gap-3 px-2 w-full pb-2 justify-between">
        <div className="flex gap-2 items-center px-2 py-1.5 hover:bg-slate-200 rounded-2xl">
          <BadgeMinus size={16} />
          <button className="text-sm">Delete</button>
        </div>
        <div className="flex gap-2 items-center px-2 py-1.5 hover:bg-slate-200 rounded-2xl">
          <Pen size={16} />
          <button>Edit</button>
        </div>
      </div>
    </div>
  );
};
