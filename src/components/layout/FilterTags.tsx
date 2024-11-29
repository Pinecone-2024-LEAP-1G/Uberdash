import { useQueryStates } from "nuqs";
import { PopOverSlider } from "./PopOverSlider";
import { filterOptions, mockItems } from "../utils/FilteredOptions";
import { PopOverPrice } from "./PopOverPrice";

export const FilterTags = () => {
  const [queryStates, setQueryStates] = useQueryStates({
    category: {
      defaultValue: [],
      parse: (value: string | null) => (value ? value.split(",") : []),
    },
    rating: {
      defaultValue: 1,
      parse: (value: string | null) => (value ? Number(value) : 1),
    },
  });

  const { category: selectedFilters, rating } = queryStates;

  const filteredItems = mockItems
    .filter((item) =>
      selectedFilters.length ? selectedFilters.includes(item.category) : true
    )
    .filter((item) => item.rating >= rating);

  const handleFilterClick = (filterValue: string) => {
    setQueryStates({
      category: selectedFilters.includes(filterValue)
        ? selectedFilters.filter((f: string) => f !== filterValue)
        : [...selectedFilters, filterValue],
    });
  };

  const handleSliderChange = (value: number) => {
    setQueryStates({
      rating: value,
    });
  };

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

        <PopOverSlider
          rate={rating}
          selected={rating > 1}
          onClick={() => {}}
          sliderValue={rating}
          onSliderChange={handleSliderChange}
        />
        <PopOverPrice />
      </div>

      <div>
        {filteredItems.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
};
