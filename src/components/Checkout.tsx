import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/Providers/CartProvider";
import { useEffect, useState } from "react";
import axios from "axios";
import { Restaurant } from "@/lib/models";

const Checkout = () => {
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const { cartItems } = useCart();

  useEffect(() => {
    const getRestaurant = async () => {
      const { data } = await axios.get<{ restaurant: Restaurant }>(
        `/api/restaurant/${cartItems?.[0]?.restaurantId}`
      );

      setRestaurant(data.restaurant);
    };
    getRestaurant();
  }, [cartItems?.[0]?.restaurantId]);

  if (!restaurant) return null;

  return (
    <div className="container w-fit mx-auto">
      <div className="w-[400px] flex justify-between items-center">
        <div className="rounded-2xl flex px-3 py-4">
          <div className="flex gap-4">
            <img
              src={restaurant?.image}
              className="w-[48px] h-[48px] rounded-full"
            />
            <div>
              <p className="text-base">{restaurant.name}</p>
              <p className="text-sm text-[#4b4b4b]">
                {restaurant.info.split(" ").splice(0, 10).join(" ")}
              </p>
            </div>
          </div>
        </div>
        <ChevronRight />
      </div>
      <Button className="w-full">Захиалга хийх</Button>
    </div>
  );
};
export default Checkout;
