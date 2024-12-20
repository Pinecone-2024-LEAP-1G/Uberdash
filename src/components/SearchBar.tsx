"use client";

import { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "../components/ui/input";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  suggestions: string[];
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  setSearchTerm,
  suggestions,
}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
          {filteredSuggestions?.length > 0 ? (
            filteredSuggestions?.map((item, index) => (
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
  );
};
