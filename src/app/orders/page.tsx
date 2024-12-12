"use client";

import { Order } from "@/lib/models";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

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
  console.log(orders);

  return (
    <div className="container mx-auto">
      {orders.map((order, index) => {
        return (
          <div key={index}>
            <h1>{order.status}</h1>
            <div>
              {order.orderItems.map((orderItem, index) => {
                return <div key={index}></div>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Orders;
