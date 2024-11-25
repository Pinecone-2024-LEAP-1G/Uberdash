import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "../ui/label";
import { ChevronDown } from "lucide-react";

type PopOverProps = {
  rate: number;
};

export const PopOverTags = (props: PopOverProps) => {
  const { rate } = props;
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          Over 4.5★ <ChevronDown />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Ratings</h4>
            <p className="text-sm text-muted-foreground">Over 4.5</p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <label htmlFor="width">Width</label>
              <Input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
