"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MenuItemType } from "@/lib/types";
import { useCart } from "@/Providers/CartProvider";
import { useState } from "react";
import { SelectQuantity } from "../components/basket-drawer/SelectQuantity";
import { Button } from "./ui/button";
import { FaPlus } from "react-icons/fa";
import { toast } from "sonner";

type MenuItem = {
  menuItem?: MenuItemType;
};

export const AddOrderModal = ({ menuItem }: MenuItem) => {
  const { addToCart } = useCart();
  const [count, setCount] = useState<number>(1);
  if (!menuItem) {
    return;
  }

  const handleAddToCart = () => {
    if (menuItem) {
      addToCart({
        ...menuItem,
        quantity: count,
      });
    }

    console.log("hah");

    toast("Амжилттай сагслагдлаа ✅");
  };

  const handleChangeCount = (value: number) => {
    setCount(value);
  };

  const totalAmount = menuItem.price * count;

  return (
    <div>
      <Dialog>
        <div>
          <DialogTrigger>
            <FaPlus fill="black" />
          </DialogTrigger>
        </div>
        <DialogContent className="h-[600px]">
          <DialogHeader>
            <DialogTitle>
              <div className="flex gap-6">
                <div className="w-[492px]">
                  <div className="w-[492px] h-[492px] absolute inset-0 overflow-hidden top-[72px] left-4">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${
                          menuItem.image || "/fallback-image.png"
                        })`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-black/5"></div>
                  </div>
                </div>

                <div className="mt-[72px] w-[492px] h-[160px]">
                  <p className="text-[32px] font-bold leading-10">
                    {menuItem.name}
                  </p>
                  <p className="text-[20px] leading-5 whitespace-pre-wrap text-[#0E8345] font-bold mb-2">
                    {Number(menuItem.price).toLocaleString()}₮
                  </p>
                  <p className="text-[14px] overflow-hidden font-normal text-[#767575] pt-2 mb-[10px]">
                    {menuItem.description}
                  </p>

                  <div className="border-[0.5px] w-[492px] border-[#D6D8DB] mt-[22px]"></div>

                  <div className="mt-[200px]">
                    <div className="mt-[80px]">
                      <SelectQuantity onChange={handleChangeCount} />
                    </div>
                    <div>
                      <div className="mt-[70px]">
                        <DialogTrigger>
                          <Button
                            type="button"
                            onClick={handleAddToCart}
                            className="w-[492px] h-[56px] px-2 rounded-lg bg-[#000000] text-[18px] text-white mt-2 hover:bg-[#202020]"
                          >
                            Сагсанд нэмэх {Number(totalAmount).toLocaleString()}
                            ₮
                          </Button>
                        </DialogTrigger>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
