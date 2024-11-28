import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";

type PopOverProps = {
  rate: number;
  selected: boolean;
  onClick: () => void;
  sliderValue: number;
  onSliderChange: (value: number) => void;
};

export const PopOverTags = ({
  rate,
  selected,
  onClick,
  sliderValue,
  onSliderChange,
}: PopOverProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          onClick={onClick}
          className={`px-4 py-2 rounded-full ${
            selected ? "bg-black text-white" : "bg-gray-200 text-black"
          }`}
        >
          Over {rate}★ <ChevronDown />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Ratings</h4>
            <p className="text-sm text-muted-foreground">
              Select minimum rating: {sliderValue}★
            </p>
          </div>
          <Slider
            value={[sliderValue]}
            onValueChange={(value) => onSliderChange(value[0])}
            max={5}
            min={1}
            step={1}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};
