"use client";
import { ObjectId } from "mongoose";
import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";

export type Food = {
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

type CartItem = Food & {
  quantity: number;
};

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (newItem: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  minusFromCart: (newItem: CartItem) => void;
  cartItemsTotalPrice: number;
  deliveryFee: number;
}
const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  minusFromCart: () => {},
  cartItemsTotalPrice: 0,
  deliveryFee: 0,
});

export const useCart = () => useContext(CartContext);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (newItem: CartItem) => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem._id === newItem._id
    );

    if (existingItem) {
      const updatedItems = cartItems.map((cartItem) => {
        if (cartItem._id === newItem._id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        }

        return cartItem;
      });

      setCartItems(updatedItems);
      return;
    }

    setCartItems([...cartItems, newItem]);
  };

  const removeFromCart = (itemId: String) => {
    setCartItems(cartItems.filter((item) => item._id !== itemId));
  };

  const minusFromCart = (newItem: CartItem) => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem._id === newItem._id
    );

    if (existingItem) {
      const updatedItems = cartItems.map((cartItem) => {
        if (cartItem._id === newItem._id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity - 1,
          };
        }

        return cartItem;
      });

      setCartItems(updatedItems);
      return;
    }

    setCartItems([...cartItems, newItem]);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartItemsTotalPrice = cartItems.reduce((acc, curr) => {
    return acc + Number(curr.price); // delivery fee $3
  }, 0);

  const deliveryFee = cartItems.reduce((acc) => {
    return acc + 3;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        minusFromCart,
        cartItemsTotalPrice,
        deliveryFee,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
