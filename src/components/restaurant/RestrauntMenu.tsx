import { Food, useCart } from "@/Providers/CartProvider";
import { LikeSvg } from "../ui/Like-svg";
import PlusSign from "../ui/PlusSignSvg";
import { useState } from "react";

type Restraunt = {
  percentage: string;
  like: string;
  menuItem: Food;
};

export const RestrauntMenu = ({ like, percentage, menuItem }: Restraunt) => {
  const { addToCart } = useCart();
  const [count] = useState<number>(1);

  const handleAddToCard = () => {
    addToCart({
      ...menuItem,
      quantity: count,
    });
  };

  return (
    <div className="max-w-xl h-[147px] rounded-xl flex cursor-pointer justify-between border ">
      <div className="w-[408px] flex py-4 pl-4 flex-col ">
        <p className="text-[16px] font-medium">{menuItem.name}</p>
        <div className="flex items-center gap-1 text-[14px] font-normal mt-[4px]">
          <p>{menuItem.price}</p>
          <div className="w-[3px] h-[3px] bg-[black] rounded-full"></div>
          <LikeSvg />
          <p>{percentage}</p>
          <p>{like}</p>
        </div>
        <div className="mt-1">
          <p className=" text-ellipsis whitespace-nowrap  overflow-auto w-[408px] text-[#757575] text-[14px] font-normal">
            {menuItem.description}
          </p>
        </div>
      </div>
      <div
        className="h-[145px] w-[145px] rounded-2xl relative "
        style={{
          backgroundImage: `url(${menuItem.image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div
          className="absolute inset-0 bg-slate-400 rounded-tr-[12px] rounded-br-[12px]"
          style={{ opacity: 0.2 }}
        ></div>
        <div
          className="w-9 h-9 rounded-full bg-white flex justify-center items-center  absolute bottom-2 right-2 hover:bg-slate-200"
          onClick={handleAddToCard}
        >
          <PlusSign />
        </div>
      </div>
    </div>
  );
};
