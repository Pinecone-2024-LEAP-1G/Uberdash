"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import { OrderNote } from "../basket-drawer/OrderNote";
import { ShoppingCart } from "lucide-react";
import { Buttons } from "../basket-drawer/ButtonCard";
import SmallModal from "./ThreeDotSelect";
import { useCart } from "@/Providers/CartProvider";
import Counter from "../Counter";

export const BasketDrawer: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const { cartItems } = useCart();

  useEffect(() => {
    const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setCount(totalCount);
  }, [cartItems]);

  useEffect(() => {
    const total = cartItems.reduce(
      (acc, item) => acc + Number(item.price) * item.quantity,
      0
    );
    setTotalAmount(total);
  }, [cartItems]);

  return (
    <Sheet>
      <SheetTrigger>
        <div className="relative flex items-center ml-3">
          <ShoppingCart className="w-6 h-6" />
          <span className="bg-green-500 text-white rounded-full absolute w-5 h-5 text-xs flex items-center justify-center -top-2 -right-3">
            {count}
          </span>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="gap-4 h-screen justify-between">
          <div>
            <SheetTitle className="text-[32px] font-bold leading-10 flex items-center justify-between mt-14">
              Захиалгууд
              <div className="w-9 h-9 bg-[#F3F3F3] rounded-full flex items-center justify-center hover:bg-[#b1b0b0]">
                <SmallModal />
              </div>
            </SheetTitle>
            <div className="flex justify-between border-b border-[#D6D8DB]">
              <p className="text-[16px] font-medium mb-4">{count} items</p>
            </div>
            {cartItems.map((cartItem) => {
              return (
                <div
                  className="flex gap-4 justify-between items-center border-b py-2"
                  key={cartItem._id}
                >
                  <img
                    src={`${cartItem.image}`}
                    className="w-12 h-12 rounded"
                  />
                  <div className="w-[260px]">
                    <p className="text-[16px] font-medium">{cartItem.name}</p>
                    <p className="text-[#656464] text-[14px]">
                      {cartItem.description}
                    </p>
                    <p className="text-[#656464]">
                      ${Number(cartItem.price) * cartItem.quantity}
                    </p>
                  </div>
                  <Counter
                    quantity={cartItem.quantity}
                    id={cartItem._id}
                    cartItem={cartItem}
                  />
                </div>
              );
            })}
            <div className="mt-4">
              <OrderNote />
            </div>
            <div className="flex justify-between text-[18px] font-medium mt-4 mb-4">
              <p>Дэлгэрэнгүй дүн</p>
              <p>${totalAmount}</p>
            </div>
          </div>
          <div className="h-28">
            <Buttons />
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
