import { Search } from "lucide-react";
import { Input } from "../ui/input";

export const Header = () => {
  return (
    <div className="border rounded-2xl flex w-full justify-center">
      <div className="flex justify-around">
        <div className="flex items-center w-48 ">Delivery Boys</div>
        <div className="bg-[#F3F3F3] rounded-full flex items-center justify-center gap-6 pl-6 pr-12 w-full">
          <Search />
          <Input className="bg-[#F3F3F3] border-none" placeholder="search" />
        </div>
      </div>
    </div>
  );
};
