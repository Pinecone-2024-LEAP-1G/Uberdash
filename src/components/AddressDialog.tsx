"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Address, Order } from "@/lib/models";
import { FaLocationArrow } from "react-icons/fa";

const AddressDialog = ({
  address,
  getAddress,
  order,
}: {
  address?: Address;
  getAddress: (order: Order) => Promise<Address | undefined>;
  order: Order;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#22C55E]" onClick={() => getAddress(order)}>
          <FaLocationArrow />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-6">
        <DialogHeader>
          <DialogTitle>Хүргэлт хийгдсэн хаяг</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex justify-between border-b">
            <p>Утасны дугаар</p>
            <p>{address?.phoneNumber || "Мэдээлэл алга"}</p>
          </div>
          <div className="flex justify-between border-b">
            <p>Дүүрэг,хороо</p>
            <p>{address?.street || "Мэдээлэл алга"}</p>
          </div>
          <div className="flex justify-between border-b">
            <p>Байрны дугаар</p>
            <p>{address?.appartmentNumber || "Мэдээлэл алга"}</p>
          </div>
          <div className="flex justify-between border-b">
            <p>Орцны дугаар</p>
            <p>{address?.entranceNumber || "Мэдээлэл алга"}</p>
          </div>
          <div className="flex justify-between border-b">
            <p>Орцны код</p>
            <p>{address?.houseNumber || "Мэдээлэл алга"}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddressDialog;
