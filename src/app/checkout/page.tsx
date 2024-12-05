"use client";
import Checkout from "@/components/Checkout";
import { CartSummary } from "@/components/CartSummary";
import { OrderTotal } from "@/components/OrderTotal";

const Home = () => {
  return (
    <div className="container mx-auto w-fit  ">
      <Checkout />
      <CartSummary />
      <OrderTotal />
    </div>
  );
};
export default Home;
