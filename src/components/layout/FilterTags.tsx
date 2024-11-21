"use client";
import React, { useState } from "react";
import { filterOptions, mockItems } from "../utils/FilteredOptions";
import { useQueryState } from "nuqs";
const FilterTags: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [filteredItems, setFilteredItems] = useState(mockItems);
  const [filtered, setFiltered] = useQueryState("filter");

  // const handleFilterClick = (filterValue: string) => {
  //   setSelectedFilter(filterValue);

  //   if (filterValue) {
  //     const filtered = mockItems.filter(
  //       (item) => item.category === filterValue
  //     );
  //     setFilteredItems(filtered);
  //   } else {
  //     setFilteredItems(mockItems);
  //   }
  // };

  return (
    <div>
      <div className="flex gap-3 bg-[#F3F3F3] p-2 rounded-md">
        {filterOptions.map((option) => (
          <button
            key={option.id}
            className={`px-4 py-2 rounded-full ${
              selectedFilter === option.value
                ? "bg-black text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => handleFilterClick(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="mt-5">
        {filteredItems.map((item) => (
          <div key={item.id} className="p-2 border-b">
            {item.name} - Rating: {item.rating}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterTags;
