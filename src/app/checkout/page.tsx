"use client";
import Checkout from "@/components/Checkout";
import {CartSummary} from "@/components/CartSummary";
import { Promotion } from "@/components/Promotion";
import { OrderTotal } from "@/components/OrderTotal";

const Home = () => {
  return (
    <div className="container mx-auto w-fit  ">
     <Checkout/>
     <CartSummary/>
     <Promotion/>
     <OrderTotal/>
    </div>
  );
};
export default Home;
