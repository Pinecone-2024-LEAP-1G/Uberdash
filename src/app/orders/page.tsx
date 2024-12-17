"use client";

import { Order } from "@/lib/models";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { UserOrders } from "../../components/UserOrders";

const Orders = () => {
  const { data: session } = useSession();
  const [orders, setOrders] = useState<Order[]>([]);
  const userId = session?.user.id;

  useEffect(() => {
    const GetOrders = async () => {
      try {
        const fetchOrders = await axios.get(`/api/order/user/${userId}`);
        setOrders(fetchOrders.data.order);
      } catch (error) {
        console.log(error);
      }
    };
    GetOrders();
  }, [userId]);

  return (
    <div className="container mx-auto flex flex-col justify-center items-center gap-4">
      <p className="text-3xl font-semibold">Захиалгын Түүх</p>
      {orders.map((order, index) => {
        return (
          <div key={index} className="border shadow-lg rounded-xl p-4">
            <div className="flex justify-between text-xl">
              <h1>Захиалгын төлөв:</h1>
              <h1> {order.status}</h1>
            </div>
            <div>
              {order.orderItems.map((orderItem, index) => {
                return (
                  <div key={index}>
                    <UserOrders orderItem={orderItem} />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Orders;
