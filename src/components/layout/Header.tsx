"use client";

import { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { BasketDrawer } from "../basket-drawer/BasketDrawer";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { Drawers } from "../Drawer";

export const Header = () => {
  const { data: session } = useSession();

  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const suggestions = ["Pizza", "Burger", "Pasta", "Salad", "Sushi"];

  const filteredSuggestions = suggestions.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  const handleInputFocus = () => {
    setDropdownVisible(true);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="flex container justify-center h-20 mx-auto">
      <div className="flex container justify-center fixed z-10 bg-white py-4">
        <div className="flex justify-between items-center gap-3">
          <div className="w-[48px] h-[48px] flex items-center">
            <Drawers />
          </div>
          <Link href={"/"}>
            <div className="flex items-center w-96 font-bold text-2xl">
              Хурдан хоол
            </div>
          </Link>
        </div>
        <div
          className="relative bg-[#F3F3F3] rounded-full flex items-center justify-center gap-6 pl-6 pr-12 w-full"
          ref={dropdownRef}
        >
          <Search />
          <Input
            className="bg-[#F3F3F3] border-none focus-visible:ring-0 focus-visible:ring-offset-0 w-[900px]"
            placeholder="Search Uber Eats"
            value={searchTerm}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          {dropdownVisible && (
            <div className="absolute top-full mt-2 left-0 w-full bg-white shadow-md rounded-b-lg rounded-t-none z-10">
              {filteredSuggestions.length > 0 ? (
                filteredSuggestions.map((item, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSearchTerm(item);
                      setDropdownVisible(false);
                    }}
                  >
                    {item}
                  </div>
                ))
              ) : (
                <div className="px-4 py-2 text-gray-500">No results found</div>
              )}
            </div>
          )}
        </div>
        <div className="flex">
          {!session ? (
            <button
              onClick={() => signIn("google")}
              className="w-24 bg-[#F3F3F3] rounded-full ml-8"
            >
              Log in
            </button>
          ) : null}
        </div>
        <BasketDrawer />
      </div>
    </div>
  );
};
