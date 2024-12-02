import { SquarePen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Promotion = () => {
  return (
    <div>
      <h1 className="text-lg mt-10 font-bold">Промо код</h1>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            {" "}
            <div>
              <div className="flex justify-between">
                <div className="flex">
                  <SquarePen />
                  <p className="ml-2">Промо код нэмэх</p>
                </div>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex gap-5 ml-5">
              <Input
                type="email"
                placeholder="Промо код oруулах"
                className="w-[200px]"
              />
              <Button type="submit">Нэмэх</Button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
