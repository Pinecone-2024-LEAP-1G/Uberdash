"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Address } from "@/lib/models";

import axios from "axios";
import { useSession } from "next-auth/react";
import { useState } from "react";
const OrderAddress = ({
  setOrderAddress,
  orderAddress,
}: {
  setOrderAddress: (address: Address) => void;
  orderAddress?: Address;
}) => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [houseNumber, setHouseNumber] = useState<string>("");
  const [entranceNumber, setEntranceNumber] = useState<string>("");
  const [appartmentNumber, setAppartmentNumber] = useState<string>("");

  const { data: session } = useSession();
  const userId = session?.user.id;
  const userName = session?.user.name;

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

    const address = {
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
      setOrderAddress(response.data.address);
    } catch (error) {
      console.error("Failed to post address:", error);
      alert("Хаяг хадгалахад алдаа гарлаа. Дахин оролдоно уу.");
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild className="">
        <Button className="w-full">
          {orderAddress
            ? "Хүргэлт хүлээн авах хаяг засах"
            : "Хүргэлт хүлээн авах хаяг оруулах"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-6">
        <DialogHeader>
          <DialogTitle>Хаяг баталгаажуулах</DialogTitle>
          <DialogDescription>
            Та өөрийн захиалгаа хүргүүлэх хаягаа оруулна уу
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
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
              <Input
                onChange={handleStreet}
                value={street}
                className="rounded-lg px-4 py-2 bg-gray-100"
                placeholder="Дүүрэг,хороо"
              />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-sm">Байрны дугаар</p>
              <Input
                onChange={handleAppartmentNumber}
                value={appartmentNumber}
                className="rounded-lg px-4 py-2 bg-gray-100"
                placeholder="Байрны дугаар"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm">Орцны код</p>
              <Input
                onChange={handleEntranceNumber}
                value={entranceNumber}
                className="rounded-lg px-4 py-2 bg-gray-100"
                placeholder="Орцны код"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm">Тоот</p>
              <Input
                onChange={handleHouseNumber}
                value={houseNumber}
                className="rounded-lg px-4 py-2 bg-gray-100"
                placeholder="Тоот"
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={PostAddress}>Хаяг баталгаажуулах</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default OrderAddress;
