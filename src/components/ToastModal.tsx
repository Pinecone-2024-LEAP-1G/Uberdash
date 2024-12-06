"use client";

import { useToast } from "@/hooks/use-toast";
import { Button } from "./ui/button";
import { ToastAction } from "@radix-ui/react-toast";

export const ToastModal = () => {
  const { toast } = useToast();
  return (
    <Button
      className=""
      variant="outline"
      onClick={() => {
        toast({
          title: "Create new order ?",
          description: "Your order successfully added to cart.",
          action: (
            <ToastAction
              className="bg-black text-white m-auto w-[320px] h-[56px] rounded-[8px]"
              altText="New Order"
            >
              New Order
            </ToastAction>
          ),
        });
      }}
    >
      Add to cart
    </Button>
  );
};
