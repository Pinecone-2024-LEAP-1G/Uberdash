import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";
import { parseAsBoolean, useQueryStates } from "nuqs";
import { useState } from "react";

export const PopOverPrice = () => {
  const [priceRange, setPriceRange] = useQueryStates({
    one: parseAsBoolean,
    two: parseAsBoolean,
    three: parseAsBoolean,
    four: parseAsBoolean,
  });

  const [selected, setSelected] = useState<boolean>(false);
  const clickPrice = () => {
    setSelected(!selected);
  };

  const selectPriceRangeOne = () => {
    setPriceRange({ ...priceRange, one: !priceRange.one });
  };
  const selectPriceRangeTwo = () => {
    setPriceRange({ ...priceRange, two: !priceRange.two });
  };
  const selectPriceRangeThree = () => {
    setPriceRange({ ...priceRange, three: !priceRange.three });
  };
  const selectPriceRangeFour = () => {
    setPriceRange({ ...priceRange, four: !priceRange.four });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          onClick={() => clickPrice()}
          className={`px-4 py-2 rounded-full hover:bg-black hover:text-white  ${
            selected ? "bg-black text-white" : "bg-gray-200 text-black"
          }`}
        >
          Price {} <ChevronDown />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Price</h4>
            <p className="text-sm text-muted-foreground"></p>
            <div className="flex gap-2">
              <Button
                onClick={selectPriceRangeOne}
                className={`w-16 px-4 py-2 rounded-full hover:text-white ${
                  priceRange.one
                    ? "bg-black text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                $
              </Button>
              <Button
                onClick={selectPriceRangeTwo}
                className={`w-16 px-4 py-2 rounded-full hover:text-white ${
                  priceRange.two
                    ? "bg-black text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                $$
              </Button>
              <Button
                onClick={selectPriceRangeThree}
                className={`w-16 px-4 py-2 rounded-full hover:text-white ${
                  priceRange.three
                    ? "bg-black text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                $$$
              </Button>
              <Button
                onClick={selectPriceRangeFour}
                className={`w-16 px-4 py-2 rounded-full hover:text-white ${
                  priceRange.four
                    ? "bg-black text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                $$$
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

const a = {
  value: "one",
};

const copyA = { ...a };
