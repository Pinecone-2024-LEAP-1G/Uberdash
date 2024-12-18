"use client";

import Checkout from "@/components/Checkout";
import { CartSummary } from "@/components/CartSummary";
import { OrderTotal } from "@/components/OrderTotal";
import { AuthGuard } from "../AuthGuard";
import OrderAddress from "@/components/OrderAddress";
import { useState } from "react";
import { Button } from "@mui/material";
import { Address } from "@/lib/models";

const CheckoutPage = () => {
  const [order, setOrder] = useState();
  const [address, setAddress] = useState<Address>();
  console.log(address);

  const PostAddress = async () => {
    const newAddress = await axios.post("/api/address", address);
    console.log(newAddress);
  };

  return (
    <AuthGuard>
      <div className="flex container mx-auto w-fit gap-6">
        <OrderAddress setAddress={setAddress} />
        <div className="  border shadow-lg rounded-xl p-4">
          <Checkout setOrder={setOrder} />
          <CartSummary />
          <OrderTotal />
        </div>
        <Button onClick={() => PostAddress()}>Хаяг баталгаажуулах</Button>
      </div>
    </AuthGuard>
  );
};

export default CheckoutPage;
