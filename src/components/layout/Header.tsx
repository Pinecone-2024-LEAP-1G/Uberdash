import { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { BasketDrawer } from "../basket-drawer/BasketDrawer";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { Drawers } from "../Drawer";
import { parseAsString, useQueryState } from "nuqs";

export const Header = () => {
  const { data: session } = useSession();

  const [searchTerm, setSearchTerm] = useQueryState("search", parseAsString);

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const suggestions = ["Pizza", "Burger", "Pasta", "Salad", "Sushi"];

  const filteredSuggestions = suggestions.filter((item) =>
    item.toLowerCase().includes((searchTerm || "").toLowerCase())
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
        <div
          className="relative flex items-center justify-between bg-[#F3F3F3] rounded-full pl-6 pr-4 w-full max-w-[900px]"
          ref={dropdownRef}
        >
          <Search className="text-gray-600 absolute left-4" />
          <Input
            className="bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0 w-full text-lg font-medium pl-12"
            placeholder="Хайлт"
            value={searchTerm || ""}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          {dropdownVisible && (
            <div className="absolute top-full mt-2 left-0 w-full bg-white rounded-b-lg z-10">
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
                <div className="px-4 py-2 text-gray-500">Хайлт олдсонгүй</div>
              )}
            </div>
          )}
        </div>
        <div className="flex items-center ml-8">
          {!session ? (
            <button
              onClick={() => signIn("google")}
              className="w-[200px] bg-[#F3F3F3] rounded-full ml-8 py-3 text-lg font-semibold tracking-wide text-gray-600 hover:bg-gray-200"
            >
              Нэвтрэх
            </button>
          ) : null}
        </div>

        <BasketDrawer />
      </div>
    </div>
  );
};
