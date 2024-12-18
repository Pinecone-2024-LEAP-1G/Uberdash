"use client";

import Link from "next/link";
import { Drawers } from "../Drawer";
import { BasketDrawer } from "../basket-drawer/BasketDrawer";
import { parseAsString, useQueryState } from "nuqs";
import { SearchBar } from "../SearchBar";
import { SignInButton } from "../SignInButton";

export const Header = () => {
  const [searchTerm, setSearchTerm] = useQueryState("search", parseAsString);

  const suggestions = ["Pizza", "Burger", "Pasta", "Salad", "Sushi"];

  return (
    <div className="flex container justify-center h-20 mx-auto mb-12 w-full">
      <div className="flex container justify-center fixed z-10 py-4 w-full bg-white">
        <div className="flex justify-between items-center gap-4">
          <div className="w-[48px] h-[48px] flex items-center">
            <Drawers />
          </div>
          <Link href={"/"}>
            <div className="flex items-center w-96 font-extrabold text-3xl text-gray-800 tracking-tight">
              Хурдан хоол
            </div>
          </Link>
        </div>
        <SearchBar
          searchTerm={searchTerm || ""}
          setSearchTerm={setSearchTerm}
          suggestions={suggestions}
        />
        <div className="flex items-center ml-8">
          <SignInButton />
        </div>
        <BasketDrawer />
      </div>
    </div>
  );
};
