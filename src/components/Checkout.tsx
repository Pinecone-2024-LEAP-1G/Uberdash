import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartItem, useCart } from "@/Providers/CartProvider";
import { useEffect, useState } from "react";
import axios from "axios";
import { Restaurant } from "@/lib/models";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { Order } from "@/lib/models/order";

const Checkout = () => {
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const { cartItems } = useCart();
  const { data: session } = useSession();
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    if (cartItems.length > 0 && cartItems[0]?.restaurantId) {
      const getRestaurant = async () => {
        try {
          const { data } = await axios.get<{ restaurant: Restaurant }>(
            `${
              process.env.NEXT_PUBLIC_URL ?? process.env.NEXT_PUBLIC_URL_PROD
            }/api/restaurant/${cartItems[0]?.restaurantId}`
          );
          setRestaurant(data.restaurant);
        } catch (error) {
          console.error("Error fetching restaurant:", error);
        }
      };
      getRestaurant();
    }
  }, [cartItems]);

  const postOrder = async () => {
    try {
      const { data } = await axios.post(
        `${
          process.env.NEXT_PUBLIC_URL ?? process.env.NEXT_PUBLIC_URL_PROD
        }/api/order`,
        {
          userId: session?.user.id,
          orderItems: [],
        }
      );
      setOrder(data.order);
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  const postOrderItem = async (cartItem: CartItem) => {
    try {
      if (order && restaurant) {
        await axios.post(
          `${
            process.env.NEXT_PUBLIC_URL ?? process.env.NEXT_PUBLIC_URL_PROD
          }/api/orderItem`,
          {
            price: cartItem.price,
            quantity: cartItem.quantity,
            orderId: order._id,
            restaurantId: restaurant._id,
            menuItem: cartItem._id,
          }
        );
      }
    } catch (error) {
      console.error("Error posting order item:", error);
    }
  };

  const createOrder = async () => {
    if (!cartItems.length || !session) return;

    await postOrder();

    if (order) {
      await Promise.all(cartItems.map((cartItem) => postOrderItem(cartItem)));
    }
  };

  if (!restaurant) return null;

  return (
    <div className="container w-fit mx-auto">
      <div className="w-[400px] flex justify-between items-center">
        <div className="rounded-2xl flex px-3 py-4">
          <div className="flex gap-4">
            <div className="flex justify-center items-center w-20 h-20">
              <Image
                alt="Restaurant Image"
                height={48}
                width={48}
                src={restaurant.image}
                className="rounded-full"
              />
            </div>
            <div>
              <p className="text-base">{restaurant.name}</p>
              <p className="text-sm text-[#4b4b4b]">
                {restaurant.info.split(" ").slice(0, 10).join(" ")}
              </p>
            </div>
          </div>
        </div>
        <ChevronRight />
      </div>
      <Button className="w-full" onClick={createOrder}>
        Захиалга хийх
      </Button>
    </div>
  );
};

export default Checkout;
