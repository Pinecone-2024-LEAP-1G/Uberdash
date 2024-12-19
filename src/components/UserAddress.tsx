"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Order } from "@/lib/models";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const UserAddress = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [houseNumber, setHouseNumber] = useState<string>("");
  const [entranceNumber, setEntranceNumber] = useState<string>("");
  const [appartmentNumber, setAppartmentNumber] = useState<string>("");
  const [order, setOrder] = useState<Order>();

  const handlePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhoneNumber(value);
  };
  const handleHouseNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setHouseNumber(value);
  };
  const handleEntranceNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEntranceNumber(value);
  };
  const handleAppartmentNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAppartmentNumber(value);
  };
  const handleStreet = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setStreet(value);
  };
  const { data: session } = useSession();
  const userId = session?.user.id;
  const userName = session?.user.name;

  useEffect(() => {
    const getOrder = async () => {
      const order = await axios.get("/api/order");
      setOrder(order.data.order[order.data.order.length - 1]);
    };
    getOrder();
  }, []);

  const PostAddress = async () => {
    const address = {
      orderId: order?._id,
      userId,
      userName,
      phoneNumber,
      street,
      houseNumber,
      entranceNumber,
      appartmentNumber,
    };
    const newAddress = await axios.post("/api/address", address);
    console.log(newAddress);
  };

  return (
    <div className="container w-[700px] mx-auto rounded-2xl border shadow-lg p-4 flex flex-col gap-6">
      <p className="text-lg font-semibold">Хүргэлт хийх хаяг</p>
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-2">
          <p className="text-sm">Утасны дугаар</p>
          <Input
            onChange={handlePhoneNumber}
            value={phoneNumber}
            className="rounded-lg px-4 py-2 bg-gray-100"
            type="tel"
            placeholder="Утасны дугаар"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm">Дүүрэг,хороо</p>
          <input
            onChange={handleStreet}
            value={street}
            className="rounded-lg px-4 py-2 bg-gray-100"
            placeholder="Дүүрэг,хороо"
          ></input>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm">Байрны дугаар</p>
          <input
            onChange={handleAppartmentNumber}
            value={appartmentNumber}
            className="rounded-lg px-4 py-2 bg-gray-100"
            placeholder="Байрны дугаар"
          ></input>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm">Орцны код</p>
          <input
            onChange={handleEntranceNumber}
            value={entranceNumber}
            className="rounded-lg px-4 py-2 bg-gray-100"
            placeholder="Орцны код"
          ></input>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm">Тоот</p>
          <input
            onChange={handleHouseNumber}
            value={houseNumber}
            className="rounded-lg px-4 py-2 bg-gray-100"
            placeholder="Тоот"
          ></input>
        </div>
      </div>
      <Link href="/orders">
        <Button onClick={() => PostAddress()}>Хаяг баталгаажуулах</Button>
      </Link>
    </div>
  );
};
export default UserAddress;
