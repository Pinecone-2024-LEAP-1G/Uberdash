import { Menu, Search, ShoppingCart } from "lucide-react";
import { Input } from "../ui/input";

import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { BasketDrawer } from "../basket-drawer/BasketDrawer";

export const Header = () => {
  return (
    <div className="flex w-full justify-center h-20 ">
      <div className="flex w-full justify-center fixed z-10 bg-white py-4">
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
        <div className="bg-[#F3F3F3] rounded-full flex items-center justify-center gap-6 pl-6 pr-12 w-full">
          <Search />
          <Input
            className="bg-[#F3F3F3] border-none focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="search"
          />
        </div>

        <BasketDrawer />
      </div>
    </div>
  );
};
