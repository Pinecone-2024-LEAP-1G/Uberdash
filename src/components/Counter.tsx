"use client";

import { useCart } from "@/Providers/CartProvider";
import { MinusIcon, PlusIcon, Trash2 } from "lucide-react";
import { useState } from "react";

const Counter = ({ quantity, id }: { quantity: number; id: string }) => {
  const [count, setCount] = useState(quantity);
  const { removeFromCart } = useCart();
  const handleMinusCount = () => {
    if (count >= 1) {
      return setCount(count - 1);
    } else {
      return;
    }
  };
  const handlePlusCount = () => {
    return setCount(count + 1);
  };
  return (
    <div className="flex bg-gray-100 rounded-2xl">
      <button
        className="pl-4 font-semibold "
        onClick={() => handleMinusCount()}
      >
        {count === 1 ? (
          <Trash2 className="w-4 h-4" onClick={() => removeFromCart(id)} />
        ) : (
          <MinusIcon className="w-4 h-4" />
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
