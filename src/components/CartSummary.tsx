import { ShoppingCart } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useCart } from "@/Providers/CartProvider";
import Image from "next/image";

export const CartSummary = () => {
  const { cartItems } = useCart();
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
            {cartItems.map((cartItem, index) => {
              return (
                <div
                  key={index}
                  className="mt-5 flex  w-[400px] h-[95px] justify-between"
                >
                  <div className="flex">
                    <Image
                      src="beer.jpeg"
                      className="w-[70px] h-[70px] rounded"
                      alt={"img"}
                    ></Image>
                    <div className="pl-3">
                      <p className="w-[210px]">{cartItem.name}</p>
                      <p className="text-gray-600">${cartItem.price}</p>
                    </div>
                  </div>
                  <div className="bg-slate-100 w-[20px] h-[30px] text-sm rounded-sm py-[6px] px-[5px] mt-4">
                    <p>{cartItem.quantity}</p>
                  </div>
                </div>
              );
            })}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
