import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (query?: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div
      className={`w-[1300px] bg-gray-100 shadow-sm p-3 rounded-full flex items-center transition-all duration-200 ${
        isFocused ? "shadow-md" : ""
      }`}
    >
      <svg
        className="ml-4 text-gray-500"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <input
        type="text"
        placeholder="Search Uber Eats"
        onChange={handleSearch}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="w-full bg-gray-100 p-2 pl-4 focus:outline-none text-gray-600"
      />
    </div>
  );
};
