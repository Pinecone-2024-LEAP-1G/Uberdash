"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { UserOrders } from "../../components/UserOrders";
import { Schema } from "mongoose";
import { Address, OrderItem } from "@/lib/models";
import moment from "moment";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import AddressDialog from "@/components/AddressDialog";
import PostReview from "@/components/PostReview";

export type Order = {
  _id: Schema.Types.ObjectId;
  status:
    | "Хүлээгдэж байна"
    | "Цуцалсан"
    | "Хийж эхлэж байна"
    | "Хийгдэж дууссан"
    | "Хүргэлтэнд гархаар хүлээгдэж байна"
    | "Хүргэлтэнд явж байна"
    | "Хүргэгдсэн";
  orderItemCount: number;
  deliveryAddressId: Schema.Types.ObjectId;
  totalPrice: number;
  userId: Schema.Types.ObjectId;
  orderItems: OrderItem[];
  createdAt: Date;
};

const Orders = () => {
  const { data: session, status } = useSession();
  const [orders, setOrders] = useState<Order[]>([]);
  const [address, setAddress] = useState<Address>();
  const userId = session?.user?.id;
  const userImg = session?.user.image || "/default-avatar.png";

  useEffect(() => {
    if (status === "loading" || !userId) return;

    const GetOrders = async () => {
      try {
        const fetchOrders = await axios.get(`/api/order/user/${userId}`);
        const sortedOrders = fetchOrders.data.order.sort(
          (a: Order, b: Order) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );

        setOrders(sortedOrders);
      } catch (error) {
        console.log(error);
      }
    };
    GetOrders();
  }, [userId, status]);

  const GetAddress = async (order: Order) => {
    try {
      const fetchAddress = await axios.get(
        `/api/order/address/${order.deliveryAddressId}`
      );
      const address = fetchAddress.data.order.deliveryAddressId;
      setAddress(address);
      return address;
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };

  return (
    <div className="container mx-auto flex flex-col justify-center items-center gap-4">
      <p className="text-3xl font-semibold">Захиалгын Түүх</p>
      {orders.map((order, index) => {
        return (
          <div
            key={order._id.toString()}
            className="border shadow-lg rounded-xl p-4"
          >
            <div className="flex justify-between items-center mb-2">
              <div className="flex flex-col justify-between">
                <p className="text-xl font-semibold">
                  Захиалга #{orders.length - index}
                </p>
                <div className="text-sm text-gray-500">
                  {moment(order.createdAt).format("LLL")}
                </div>
              </div>
              <Image
                src={userImg}
                alt="img"
                height={58}
                width={58}
                className="rounded-full"
              ></Image>
            </div>
            <div className="flex justify-between text-xl">
              <h1>Захиалгын төлөв:</h1>
              <h1>{order.status}</h1>
            </div>
            <div>
              {order.orderItems.map((orderItem, index) => (
                <div key={index} className="border-b py-2">
                  <UserOrders orderItem={orderItem} />
                </div>
              ))}
            </div>
            <div className="flex flex-col py-2">
              <div className="flex gap-2">
                <p>Нийт бүтээгдэхүүний тоо:</p>
                <p>{order.orderItemCount}</p>
              </div>
              <div className="flex gap-2">
                <p>Нийт захиалгын төлбөр:</p>
                <p>{Number(order.totalPrice).toLocaleString()}₮</p>
              </div>
            </div>
            <div>
              <Button onClick={() => GetAddress(order)}>Хаяг харах</Button>
            </div>
            <PostReview order={order} />
          </div>
        );
      })}
    </div>
  );
};
export default Orders;
