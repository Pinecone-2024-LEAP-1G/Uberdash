"use client";

import Checkout from "@/components/Checkout";
import { CartSummary } from "@/components/CartSummary";
import { OrderTotal } from "@/components/OrderTotal";
import { AuthGuard } from "../AuthGuard";
import UserAddress from "@/components/UserAddress";
import { Button } from "@/components/ui/button";

const CheckoutPage = () => {
  return (
    <AuthGuard>
      <div className="container mx-auto w-fit flex flex-col gap-6">
        <div className="flex gap-6">
          <UserAddress />
          <div className="border shadow-lg rounded-xl p-4">
            <Checkout />
            <CartSummary />
            <OrderTotal />
          </div>
        </div>
        <Button>Захиалга хийх</Button>
      </div>
    </AuthGuard>
  );
};

export default CheckoutPage;
