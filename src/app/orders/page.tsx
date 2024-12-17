"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { UserOrders } from "../../components/UserOrders";
import { Schema } from "mongoose";
import { OrderItem } from "@/lib/models";

export type Order = {
  _id: Schema.Types.ObjectId;
  status:
    | "Pending"
    | "Cancelled"
    | "ReadyToStart"
    | "InPreparation"
    | "ReadyForPickup"
    | "OnTheWay"
    | "Delivered";
  orderItemCount: number;
  totalPrice: number;
  userId: Schema.Types.ObjectId;
  orderItems: OrderItem[];
};

const Orders = () => {
  const { data: session, status } = useSession();
  const [orders, setOrders] = useState<Order[]>([]);
  const userId = session?.user?.id;

  useEffect(() => {
    if (status === "loading" || !userId) return;

    const GetOrders = async () => {
      try {
        const fetchOrders = await axios.get(`/api/order/user/${userId}`);
        setOrders(fetchOrders.data.order);
      } catch (error) {
        console.log(error);
      }
    };
    GetOrders();
  }, [userId, status]);

  return (
    <div className="container mx-auto flex flex-col justify-center items-center gap-4">
      <p className="text-3xl font-semibold">Захиалгын Түүх</p>
      {orders.map((order) => (
        <div
          key={order._id.toString()}
          className="border shadow-lg rounded-xl p-4"
        >
          <div className="flex justify-between text-xl">
            <h1>Захиалгын төлөв:</h1>
            <h1>{order.status}</h1>
          </div>
          <div>
            {order.orderItems.map((orderItem, index) => (
              <div key={index} className="border-b">
                <UserOrders orderItem={orderItem} />
              </div>
            ))}
          </div>
          <div className="flex gap-2 flex-col">
            <div className="flex gap-2">
              <p>Нийт бүтээгдэхүүний тоо:</p>
              <p>{order.orderItemCount}</p>
            </div>
            <div className="flex gap-2">
              <p>Нийт захиалгын төлбөр:</p>
              <p>{Number(order.totalPrice).toLocaleString()}₮</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Orders;
