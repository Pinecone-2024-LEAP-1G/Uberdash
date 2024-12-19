"use client";

import Checkout from "@/components/Checkout";
import { CartSummary } from "@/components/CartSummary";
import { OrderTotal } from "@/components/OrderTotal";
import { AuthGuard } from "../AuthGuard";

const CheckoutPage = () => {
  return (
    <AuthGuard>
      <div className="container mx-auto w-fit border shadow-lg rounded-xl p-4">
        <Checkout />
        <CartSummary />
        <OrderTotal />
      </div>
    </AuthGuard>
  );
};

export default CheckoutPage;
