"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Order } from "@/lib/models";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const UserAddress = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [houseNumber, setHouseNumber] = useState<string>("");
  const [entranceNumber, setEntranceNumber] = useState<string>("");
  const [appartmentNumber, setAppartmentNumber] = useState<string>("");
  const [order, setOrder] = useState<Order | null>(null);

  const { data: session } = useSession();
  const userId = session?.user.id;
  const userName = session?.user.name;

  const router = useRouter();

  useEffect(() => {
    const getOrder = async () => {
      try {
        const response = await axios.get("/api/order");
        const orders = response.data.order;
        if (orders.length > 0) {
          setOrder(orders[orders.length - 1]);
        } else {
          console.error("No orders found");
        }
      } catch (error) {
        console.error("Failed to fetch order:", error);
      }
    };
    getOrder();
  }, []);

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

  const PostAddress = async () => {
    if (
      !phoneNumber ||
      !street ||
      !houseNumber ||
      !entranceNumber ||
      !appartmentNumber
    ) {
      alert("Бүх талбарыг бөглөнө үү!");
      return;
    }

    if (!order) {
      alert("Таны захиалга олдсонгүй. Дахин оролдоно уу.");
      return;
    }

    const address = {
      orderId: order._id,
      userId,
      userName,
      phoneNumber,
      street,
      houseNumber,
      entranceNumber,
      appartmentNumber,
    };

    try {
      const response = await axios.post("/api/address", address);
      console.log("Address saved:", response.data);
      router.push("/orders");
    } catch (error) {
      console.error("Failed to post address:", error);
      alert("Хаяг хадгалахад алдаа гарлаа. Дахин оролдоно уу.");
    }
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
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm">Байрны дугаар</p>
          <input
            onChange={handleAppartmentNumber}
            value={appartmentNumber}
            className="rounded-lg px-4 py-2 bg-gray-100"
            placeholder="Байрны дугаар"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm">Орцны код</p>
          <input
            onChange={handleEntranceNumber}
            value={entranceNumber}
            className="rounded-lg px-4 py-2 bg-gray-100"
            placeholder="Орцны код"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm">Тоот</p>
          <input
            onChange={handleHouseNumber}
            value={houseNumber}
            className="rounded-lg px-4 py-2 bg-gray-100"
            placeholder="Тоот"
          />
        </div>
      </div>
      <Button onClick={PostAddress}>Хаяг баталгаажуулах</Button>
    </div>
  );
};

export default UserAddress;
