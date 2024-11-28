import PlusSign from "./ui/PlusSignSvg";
import { LikeSvg } from "./ui/Like-svg";
import { Product, useCart } from "@/app/Providers/CartProvider";
import { useState } from "react";

interface MenuItemProps {
  menuItem: Product;
}

export const MenuItemLastCard = ({ menuItem }: MenuItemProps) => {
  const { addToCart } = useCart();
  const [count, setCount] = useState<number>(1);

  const handleAddToCard = () => {
    addToCart({
      ...menuItem,
      quantity: count,
    });
  };

  return (
    <div className="w-[220px] h-[252px]">
      <div
        className="w-[220px] h-[188px] relative cursor-pointer rounded-xl"
        style={{
          backgroundImage: `url(${menuItem.image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="w-[98px] h-[24px] bg-[#0e8345] text-[12px] font-medium px-3 py-1 absolute top-2  rounded-br-[12px] rounded-tr-[12px]">
          <p className="text-white">{"#1 most liked"}</p>
        </div>
        <div
          className="w-9 h-9 rounded-full bg-white flex justify-center items-center  absolute bottom-2 right-2 hover:bg-slate-200"
          onClick={handleAddToCard}
        >
          <PlusSign />
        </div>
      </div>
      <div>
        <p>{menuItem.name}</p>
        <div className="flex items-center gap-1 text-[14px] font-normal ">
          <p>{menuItem.price}$</p>
          <div className="w-[3px] h-[3px] bg-[black] rounded-full"></div>
          <LikeSvg />
          <p>{91}%</p>
          <p>{`(${1064})`}</p>
        </div>
      </div>
    </div>
  );
};
