"use client";

import { useCart } from "@/Providers/CartProvider";
import { MinusIcon, PlusIcon, Trash2 } from "lucide-react";
import { ObjectId } from "mongoose";
import { useState } from "react";

type CartItem = {
  quantity: number;
  image: string;
  _id: string;
  name: string;
  categoryId: string;
  price: string;
  description: string;
  size: string;
  available: boolean;
  restaurantId: ObjectId;
};

const Counter = ({
  quantity,
  id,
  cartItem,
}: {
  quantity: number;
  id: string;
  cartItem: CartItem;
}) => {
  const [count, setCount] = useState(quantity);
  const { removeFromCart, addToCart, minusFromCart } = useCart();

  const handleMinusCount = () => {
    if (count >= 1) {
      return (
        setCount(count - 1), minusFromCart({ ...cartItem, quantity: count })
      );
    } else {
      return;
    }
  };

  const handlePlusCount = () => {
    return (
      setCount(count + 1),
      addToCart({
        ...cartItem,
        quantity: count,
      })
    );
  };

  return (
    <div className="flex bg-gray-100 rounded-2xl">
      <button className="pl-4 font-semibold ">
        {count === 1 ? (
          <Trash2 className="w-4 h-4" onClick={() => removeFromCart(id)} />
        ) : (
          <MinusIcon className="w-4 h-4" onClick={() => handleMinusCount()} />
        )}
      </button>
      <p className="w-8 h-8 flex justify-center items-center">{count}</p>
      <button className="pr-4 font-semibold" onClick={() => handlePlusCount()}>
        <PlusIcon className="w-4 h-4" />
      </button>
    </div>
  );
};
export default Counter;
