"use client";
import { MenuItemType } from "@/lib/types";

import axios from "axios";
import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";

interface FoodContextType {
  foodItems: MenuItemType[];
}

const FoodContext = createContext<FoodContextType>({
  foodItems: [],
});

const useFood = () => useContext(FoodContext);

interface FoodProviderProps {
  children: ReactNode;
}

const FoodProvider: React.FC<FoodProviderProps> = ({ children }) => {
  const [foodItems, setFoodItems] = useState<MenuItemType[]>([]);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get(
          `${
            process.env.NEXT_PUBLIC_URL ?? process.env.NEXT_PUBLIC_URL_PROD
          }/api/menu-item`
        );
        setFoodItems(response?.data?.menuItems);
      } catch (err) {
        console.log("Error fetching Foods:", err);
      }
    };

    fetchFoods();
  }, []);

  return (
    <FoodContext.Provider value={{ foodItems }}>
      {children}
    </FoodContext.Provider>
  );
};

export { useFood, FoodProvider };
