"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ThreeDot from "../ui/ThreeDot";
import DownArrow from "../ui/DownArrow";
import { useState } from "react";
import { OrderNote } from "../basket-drawer/OrderNote";

export const BasketDrawer: React.FC = () => {
  const [defValue, setDefValue] = useState<string>("1");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDefValue(e.target.value);
  };

  return (
    <Sheet>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent>
        <SheetHeader className="gap-4">
          <SheetTitle className="text-[32px] font-bold leading-10 flex items-center justify-between mt-14">
            Casa Durango
            <div className="w-9 h-9 bg-[#F3F3F3] rounded-full flex items-center justify-center hover:bg-[#b1b0b0]">
              <ThreeDot />
            </div>
          </SheetTitle>
          <div className="flex justify-between">
            <div>
              <p className="text-[16px] font-medium">1 item</p>
            </div>
            <div className="flex">
              <p className="text-[16px] text-[#656464] font-medium pr-1">
                Subtotal:
              </p>
              <p className="text-[18px] font-medium leading-[24px]">$15.00</p>
            </div>
          </div>
          <div className="border-[0.5px] w-[453px] border-[#D6D8DB] "></div>
          <div className="w-[453px] h-[69px]  pt-4  ">
            <div className="flex">
              <div className="w-[389px] h-[53px]">
                <p className="text-[16px] font-medium">Quesadilla</p>
                <p className="text-[#656464] text-[14px]">
                  Choose your protien: Shredded Chicken
                </p>
              </div>
              <div className="pl-4 ">
                <img
                  src="https://tb-static.uber.com/prod/image-proc/processed_images/e0b427d21281a4847d492a7432fc0daf/a19bb09692310dfd41e49a96c424b3a6.jpeg"
                  className="w-12 h-12"
                />
              </div>
            </div>
            <div className="w-[453px] h-[64px] flex items-center justify-between">
              <div className="relative">
                <select
                  className="appearance-none w-[56px] h-[36px] bg-[#F3F3F3] text-[#000000] border-none rounded-[500px] pl-3 font-medium cursor-pointer flex items-center justify-center  hover:bg-[#b1b0b0] focus:outline-none  "
                  value={defValue}
                  onChange={handleChange}
                >
                  <option value="remove" className="bg-white text-black">
                    remove
                  </option>
                  <option value="1" className="bg-white text-black">
                    1
                  </option>
                  <option value="2" className="bg-white text-black">
                    2
                  </option>
                  <option value="3" className="bg-white text-black">
                    3
                  </option>
                  <option value="4" className="bg-white text-black">
                    4
                  </option>
                  <option value="5" className="bg-white text-black">
                    5
                  </option>
                  <option value="6" className="bg-white text-black">
                    6
                  </option>
                  <option value="7" className="bg-white text-black">
                    7
                  </option>
                  <option value="8" className="bg-white text-black">
                    8
                  </option>
                </select>

                <div className="absolute inset-y-0 right-0 flex items-center px-3 text-white pointer-events-none">
                  <DownArrow />
                </div>
              </div>
              <div>
                <p className="text-[14px] font-medium text-[#767575]">$14.00</p>
              </div>
            </div>
            <div className="mt-4">
              <OrderNote />
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
