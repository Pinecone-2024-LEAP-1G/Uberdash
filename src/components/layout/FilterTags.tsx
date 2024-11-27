import React, { useState, useEffect } from "react";
import { filterOptions, mockItems } from "../utils/FilteredOptions";
import { useQueryState } from "nuqs";
import { PopOverTags } from "./PopOverTags";

const FilterTags: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useQueryState<string[]>(
    "category",
    {
      defaultValue: [],
      transform: (value: string | null) => (value ? value.split(",") : []),
    }
  );

  const [popOverSelected, setPopOverSelected] = useState<boolean>(false);
  const [sliderValue, setSliderValue] = useState<number>(4);

  const filteredItems = mockItems.filter((item) =>
    selectedFilters.length ? selectedFilters.includes(item.category) : true
  );

  const handleFilterClick = (filterValue: string) => {
    setSelectedFilters((prevFilters) => {
      const filters = Array.isArray(prevFilters) ? prevFilters : [];
      if (filters.includes(filterValue)) {
        return filters.filter((f) => f !== filterValue);
      } else {
        return [...filters, filterValue];
      }
    });
  };

  const handlePopOverClick = () => {
    setPopOverSelected((prev) => !prev);
  };

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
  };

  const buildCategoryQuery = (filters: string[]) => {
    if (Array.isArray(filters)) {
      return filters.join(",");
    }
    return "";
  };

  useEffect(() => {
    const queryString = selectedFilters.length
      ? `?category=${buildCategoryQuery(selectedFilters)}`
      : "";
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${queryString}`
    );
  }, [selectedFilters]);

  return (
    <div>
      <div className="flex gap-3 p-2">
        {filterOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => handleFilterClick(option.value)}
            className={`px-4 py-2 rounded-full ${
              selectedFilters.includes(option.value)
                ? "bg-black text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {option.label}
          </button>
        ))}
        <PopOverTags
          rate={sliderValue}
          selected={popOverSelected}
          onClick={handlePopOverClick}
          sliderValue={sliderValue}
          onSliderChange={handleSliderChange}
        />
      </div>
      <div>
        {filteredItems.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
};

export default FilterTags;
