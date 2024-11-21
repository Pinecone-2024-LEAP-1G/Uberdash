"use client";
import React from "react";
import { filterOptions, mockItems } from "../utils/FilteredOptions";
import { useQueryState } from "nuqs";

const FilterTags: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useQueryState<string>(
    "category",
    {
      defaultValue: [],
      transform: (value: string | null) => (value ? value.split(",") : []),
    }
  );

  React.useEffect(() => {
    console.log("Selected Filters Updated:", selectedFilters);
  }, [selectedFilters]);

  const filteredItems = mockItems.filter((item) =>
    selectedFilters?.length ? selectedFilters.includes(item.category) : true
  );

  const handleFilterClick = (filterValue: string) => {
    setSelectedFilters((prev) => {
      const filters = Array.isArray(prev) ? prev : [];
      if (filters.includes(filterValue)) {
        return filters.filter((f) => f !== filterValue);
      } else {
        return [...filters, filterValue];
      }
    });
  };

  // Helper function to build the query string from the filters
  const buildCategoryQuery = (filters: string[]) => {
    return (Array.isArray(filters) ? filters : []).join(","); // Join the filters with commas
  };

  // Update the URL when filters change
  React.useEffect(() => {
    if (selectedFilters?.length) {
      const queryString = buildCategoryQuery(selectedFilters);
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}?category=${queryString}`
      );
    } else {
      window.history.replaceState(null, "", `${window.location.pathname}`);
    }
  }, [selectedFilters]);

  return (
    <div>
      <div>
        <div className="flex gap-3 bg-[#F3F3F3] p-2">
          {filterOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => handleFilterClick(option.value)}
              className={`px-4 py-2 rounded-full ${
                selectedFilters?.includes(option.value)
                  ? "bg-black text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
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
