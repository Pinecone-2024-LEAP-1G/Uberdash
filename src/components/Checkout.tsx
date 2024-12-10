import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/Providers/CartProvider";
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
  const [order, setOrder] = useState<Order>();
  useEffect(() => {
    const getRestaurant = async () => {
      const { data } = await axios.get<{ restaurant: Restaurant }>(
        ` ${
          process.env.NEXT_PUBLIC_URL ?? process.env.NEXT_PUBLIC_URL_PROD
        }/api/restaurant/${cartItems?.[0]?.restaurantId}`
      );

      setRestaurant(data.restaurant);
    };
    getRestaurant();
  }, [cartItems[0]?.restaurantId]);

  const postOrder = async () => {
    try {
      const newOrder = await axios.post(
        `${
          process.env.NEXT_PUBLIC_URL ?? process.env.NEXT_PUBLIC_URL_PROD
        }/api/order`,
        {
          userId: session?.user.id,
          orderItems: [],
        }
      );
      setOrder(newOrder.data.order);
    } catch (error) {
      console.log(error);
    }
  };

  const postOrderItem = async () => {
    cartItems.map(async (cartItem) => {
      try {
        await axios.post(
          ` ${
            process.env.NEXT_PUBLIC_URL ?? process.env.NEXT_PUBLIC_URL_PROD
          }/api/orderItem`,
          {
            price: cartItem.price,
            quantity: cartItem.quantity,
            orderId: order?._id,
            restaurantId: restaurant?._id,
            menuItem: cartItem._id,
          }
        );
      } catch (err) {
        console.log(err);
      }
    });
  };

  const getOrder = async () => {
    const orders = await axios.get(
      `${
        process.env.NEXT_PUBLIC_URL ?? process.env.NEXT_PUBLIC_URL_PROD
      }/api/order/${order?._id}`
    );
    console.log(orders);
  };

  const createOrder = () => {
    postOrder();
  };

  if (!restaurant) return null;

  return (
    <div className="container w-fit mx-auto">
      <div className="w-[400px] flex justify-between items-center">
        <div className="rounded-2xl flex px-3 py-4">
          <div className="flex gap-4">
            <div className="flex justify-center items-center w-20 h-20">
              <Image
                alt="img"
                height={48}
                width={48}
                src={restaurant.image}
                className="rounded-full"
              />
            </div>
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
      <div className={`${!order ? "block" : "hidden"}`}>
        <Button className="w-full" onClick={() => createOrder()}>
          Захиалга хийх
        </Button>
      </div>

      <div className={`${order ? "block" : "hidden"}`}>
        <Button className="w-full" onClick={() => postOrderItem()}>
          Баталгаажуулах
        </Button>
      </div>
    </div>
  );
};
export default Checkout;
