import { Menu, Search, ShoppingCart } from "lucide-react";
import { Input } from "../ui/input";

export const Header = () => {
  return (
    <div className=" flex w-full justify-center">
      <div className="flex justify-between items-center">
        <Menu className="w-56" />
        <div className="flex items-center w-96 mr-96 font-bold text-2xl">
          Хурдан хоол
        </div>
        <div className="bg-[#F3F3F3] rounded-full flex items-center justify-center gap-6 pl-6 pr-12 w-full">
          <Search />
          <Input
            className="bg-[#F3F3F3] border-none focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="search"
          />
        </div>
        <ShoppingCart className="w-56" />
      </div>
    </div>
  );
};
