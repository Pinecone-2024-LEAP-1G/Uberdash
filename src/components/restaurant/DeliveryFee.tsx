import { Info } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@mui/material";

export const DeliveryFee = () => {
  return (
    <div className="border rounded-2xl text-[12px] flex h-16 py-4">
      <div className="flex flex-col items-center justify-center w-1/2 border-r">
        <p>Delivery fee</p>
        <Dialog>
          <DialogTrigger className="flex items-center gap-2">
            <p className="text-[#5E5E5E] ">Other fees</p>
            <Info width={12} height={12} />
          </DialogTrigger>
          <DialogContent className="h-[544px]">
            <DialogHeader className="flex flex-col justify-between">
              <DialogTitle className="text-4xl">Other fees</DialogTitle>
              <DialogDescription className="flex flex-col gap-2 text-base overflow-scroll h-[350px]">
                <p>
                  Delivery Fee: Delivery Fees help cover delivery costs. They
                  vary for each merchant based on factors like demand, your
                  location and the availability of nearby delivery people. Uber
                  collects this fee; it is not a gratuity. Couriers also receive
                  payment per local laws.
                </p>
                <p>
                  Service Fee and Other Fees: These fees vary based on factors
                  like basket size and help cover costs related to your order.
                  You pay $0.10 of these fees directly to Uber for marketplace
                  services (such as facilitating access to couriers and
                  merchants), and the remaining amount is remitted to your
                  Courier. Your Courier may pay a portion of these fees to Uber
                  for various services, including lead generation, payment
                  processing, issue support, and other ancillary services. Fees
                  do not constitute gratuities.
                </p>
                <p>
                  CA Driver Benefits: CA Driver Benefits fee was introduced in
                  California to help fund the new benefits offered to drivers
                  thanks to the passing of Prop 22. These benefits include a
                  healthcare stipend, additional insurance coverage, and a
                  minimum earnings guarantee, among others.
                </p>
                <p>
                  Marketplace Fee: The Marketplace Fee applies ONLY to orders
                  that stores deliver on their own, and it helps us operate the
                  platform. Depending on a customer’s location, this fee is
                  charged either as a percent of an order’s subtotal or a flat
                  fee. A minimum and/or maximum amount may also apply.
                </p>
                <p>
                  Fees Required by Law: Other fees as required by law may apply
                  to your order, such as fees for single use bags.
                </p>
              </DialogDescription>
              <Button className="w-full text-xl h-14">Done</Button>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex flex-col items-center justify-center w-1/2">
        <p>10-30 min</p>
        <p className="text-[#5E5E5E]">Delivery Time</p>
      </div>
    </div>
  );
};
