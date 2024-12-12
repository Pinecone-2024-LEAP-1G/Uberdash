"use client";

import { LikeSvg } from "../ui/Like-svg";

import { AddOrderModal } from "@/components/AddOrderModal";
import { MenuItemType } from "@/lib/types";

interface MenuItemProps {
  menuItem: MenuItemType;
}

export const MenuItemLastCard: React.FC<MenuItemProps> = ({ menuItem }) => {
  return (
    <div className="w-[220px] h-[252px]">
      <div
        className="w-[220px] h-[188px] relative cursor-pointer rounded-xl"
        style={{
          backgroundImage: `url("${menuItem?.image}")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div
          className="absolute inset-0 bg-slate-400 rounded-xl"
          style={{ opacity: 0.2 }}
        ></div>
        <div className=" text-[12px] font-medium px-3 py-1 absolute top-2 rounded-br-[12px] rounded-tr-[12px]"></div>
        <div className="w-9 h-9 rounded-full bg-white flex justify-center items-center absolute bottom-2 right-2 hover:bg-slate-200">
          <div className="mt-[6px]">
            <AddOrderModal menuItem={menuItem} />
          </div>
        </div>
      </div>
      <div>
        <p>{menuItem.name}</p>
        <div className="flex items-center gap-1 text-[14px] font-normal">
          <p>{menuItem.price}$</p>
          <div className="w-[3px] h-[3px] bg-[black] rounded-full"></div>
          <LikeSvg />

          <p>({1064})</p>
        </div>
      </div>
    </div>
  );
};
