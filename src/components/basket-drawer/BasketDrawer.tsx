"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import DownArrow from "../ui/DownArrow";
import { useEffect, useState } from "react";
import { OrderNote } from "../basket-drawer/OrderNote";
import { ShoppingCart } from "lucide-react";
import UberOne from "../ui/UberOne";
import { Buttons } from "../basket-drawer/ButtonCard";
import { SecondButton } from "../basket-drawer/SecondButton";
import SmallModal from "./ThreeDotSelect";
import { useCart } from "@/Providers/CartProvider";
import Counter from "../Counter";
export const BasketDrawer: React.FC = () => {
  const [defValue, setDefValue] = useState<string>("1");
  const [count, setCount] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const { cartItems, clearCart } = useCart();

  useEffect(() => {
    const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setCount(totalCount);
  }, [cartItems]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDefValue(e.target.value);
  };

  return (
    <Sheet>
      <SheetTrigger>
        <div className="ml-56 flex w-20">
          <ShoppingCart className="relative" />
          <p className="bg-green-500 text-white rounded-full absolute w-5 h-5 text-sm text-center right-[-64px] top-[20px]">
            {count}
          </p>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="gap-4">
          <SheetTitle className="text-[32px] font-bold leading-10 flex items-center justify-between mt-14">
            Casa Durango
            <div className="w-9 h-9 bg-[#F3F3F3] rounded-full flex items-center justify-center hover:bg-[#b1b0b0]">
              <SmallModal />
            </div>
          </SheetTitle>
          <div className="flex justify-between border-b border-[#D6D8DB]">
            <p className="text-[16px] font-medium mb-4">{count} items</p>
          </div>
          <div>
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
                  <Counter quantity={cartItem.quantity} id={cartItem._id} />
                </div>
              );
            })}
            <div className="mt-4">
              <OrderNote />
            </div>
            <div className="flex justify-between text-[18px] font-medium mt-4 mb-4">
              <p>Subtotal</p>
              <p>${totalAmount}</p>
            </div>
            <div className="w-[446px] h-[350.5px]"></div>
            <div className="flex mt-4 ">
              <div className="bg-[#fdf2dc] w-[48px] h-[49px] items-center justify-center flex">
                <UberOne />
              </div>
              <div>
                <p className="w-[410px] bg-[#fdf2dc]  h-[49px] flex items-center text-[#9F6402] text-[16px] font-medium">
                  Add $0.01 to save with Uber One
                </p>
              </div>
            </div>
            <div className="mt-4">
              <Buttons />
              <SecondButton />
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
