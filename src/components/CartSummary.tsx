import { ShoppingCart } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const CartSummary = () => {
  return (
    <div className="container w-fit mx-auto">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex  w-[380px] justify-between">
              <div className="flex">
                <ShoppingCart />
                <p className="pl-4 font-bold"> Захиалгын хураангуй</p>
                <p className="pl-3">(1 items)</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="mt-5 flex  w-[400px] h-[95px] justify-between">
              <div className="flex">
                <img
                  src="beer.jpeg"
                  className="w-[70px] h-[70px] rounded"
                ></img>
                <div className="pl-3">
                  <p className="w-[210px]">Greene Turtle's Bottled Root Beer</p>
                  <p className="text-gray-600">$3.79</p>
                </div>
              </div>
              <div className="bg-slate-100 w-[20px] h-[30px] text-sm rounded-sm py-[6px] px-[5px] mt-4">
                <p>1</p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
