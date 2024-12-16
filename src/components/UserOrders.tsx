"use Client";
import { MenuItem, OrderItem } from "@/lib/models";
import axios from "axios";
import { useEffect, useState } from "react";

export const UserOrders = ({ orderItem }: { orderItem: OrderItem }) => {
  const [menuItem, setMenuItem] = useState<MenuItem>();

  useEffect(() => {
    const getMenuItem = async () => {
      const fetchMenuItems = await axios.get(
        `/api/menu-item/${orderItem.menuItem}`
      );
      setMenuItem(fetchMenuItems.data.menuItem);
    };
    getMenuItem();
  }, []);

  return (
    <div className="flex justify-between items-center w-[400px] h-[80px]">
      <img src={menuItem?.image} alt="img" className="w-16 h-16" />
      <div className="flex flex-col gap-2 w-[300px]">
        <p>{menuItem?.name}</p>
        <div className="flex justify-between">
          <p>Тоо: {orderItem.quantity}</p>
          <p>Үнэ: {orderItem.price.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};
