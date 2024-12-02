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
}
const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
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

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
