import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";
import { parseAsBoolean, useQueryStates } from "nuqs";

export const PopOverPrice = () => {
  const [queryStates, setQueryStates] = useQueryStates({
    price: {
      defaultValue: [],
      parse: (value: string | null) =>
        value ? value.split(",").map(Number) : [],
    },
  });

  const { price } = queryStates;

  const togglePriceRange = (value: number) => {
    const updatedPrice = price.includes(value)
      ? price.filter((p) => p !== value)
      : [...price, value];
    setQueryStates({ price: updatedPrice });
  };

  const isSelected = (value: number) => price.includes(value);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={`px-4 py-2 rounded-full hover:bg-black hover:text-white ${
            price.length ? "bg-black text-white" : "bg-gray-200 text-black"
          }`}
        >
          Price <ChevronDown />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Price</h4>
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((value) => (
                <Button
                  key={value}
                  onClick={() => togglePriceRange(value)}
                  className={`w-16 px-4 py-2 rounded-full hover:text-white ${
                    isSelected(value)
                      ? "bg-black text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {"$".repeat(value)}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
