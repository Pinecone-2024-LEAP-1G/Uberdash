"use client";

import { MenuItemType } from "@/lib/types";
import { useCart } from "@/Providers/CartProvider";
import { MinusIcon, PlusIcon, Trash2 } from "lucide-react";
import { useState } from "react";

type CartItem = MenuItemType & {
  quantity: number;
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
    if (count > 1) {
      setCount(count - 1);
      minusFromCart({
        ...cartItem,
        quantity: count - 1,
      });
    } else if (count === 1) {
      setCount(0);
      removeFromCart(id);
    }
  };

  const handlePlusCount = () => {
    setCount(count + 1);
    addToCart({
      ...cartItem,
      quantity: count + 1,
    });
  };

  return (
    <div className="flex bg-gray-100 rounded-2xl">
      <button className="pl-4 font-semibold" onClick={handleMinusCount}>
        {count === 1 ? (
          <Trash2 className="w-4 h-4" />
        ) : (
          <MinusIcon className="w-4 h-4" />
        )}
      </button>
      <p className="w-8 h-8 flex justify-center items-center">{count}</p>
      <button className="pr-4 font-semibold" onClick={handlePlusCount}>
        <PlusIcon className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Counter;
