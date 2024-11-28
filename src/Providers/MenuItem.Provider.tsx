"use client";
import { Food } from "./CartProvider";
import axios from "axios";
import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";

interface FoodContextType {
  foodItems: Food[];
}

const FoodContext = createContext<FoodContextType>({
  foodItems: [],
});

const useFood = () => useContext(FoodContext);

interface FoodProviderProps {
  children: ReactNode;
}

const FoodProvider: React.FC<FoodProviderProps> = ({ children }) => {
  const [foodItems, setFoodItems] = useState<Food[]>([]);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/menu-item`);
        setFoodItems(response.data.menuItems);
      } catch (err) {
        console.error("Error fetching Foods:", err);
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
