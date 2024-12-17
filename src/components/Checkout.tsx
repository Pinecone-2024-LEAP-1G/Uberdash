import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/Providers/CartProvider";
import { useEffect, useState } from "react";
import axios from "axios";
import { Restaurant } from "@/lib/models";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { Order } from "@/lib/models/order";
import Link from "next/link";
// import { ObjectId } from "mongoose";

const Checkout = () => {
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const { cartItems, clearCart } = useCart();
  const { data: session } = useSession();
  const [order, setOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (cartItems.length > 0 && cartItems[0]?.restaurantId) {
      const getRestaurant = async () => {
        try {
          const { data } = await axios.get<{ restaurant: Restaurant }>(
            `/api/restaurant/${cartItems[0]?.restaurantId}`
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
    const orderData = {
      userId: session?.user.id,
      orderItems: [
        cartItems.map((cartItem) => ({
          price: cartItem.price,
          quantity: cartItem.quantity,
          orderId: order?._id,
          restaurantId: cartItem.restaurantId,
          menuItem: cartItem._id,
        })),
      ],
    };
    try {
      const { data } = await axios.post(`/api/order`, orderData);
      setOrder(data.order);
    } catch (error) {
      console.log("Error creating order:", error);
      return null;
    }
  };

  // const postOrderItem = async (
  //   cartItem: CartItem,
  //   orderId: ObjectId | undefined
  // ) => {
  //   try {
  //     if (order && restaurant) {
  //       await axios.post(`/api/orderItem`, {
  //         price: cartItem.price,
  //         quantity: cartItem.quantity,
  //         orderId,
  //         restaurantId: cartItem.restaurantId,
  //         menuItem: cartItem._id,
  //       });
  //     }
  //   } catch (error) {
  //     console.log("Error posting order item:", error);
  //   }
  // };
  // cartItems.forEach((cartItem) => postOrderItem(cartItem, order?._id));

  const createOrder = async () => {
    setIsLoading(true);
    await postOrder();

    setIsLoading(false);
  };

  if (!restaurant) return <div>No restaurant found.</div>;

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
      <Link href={"/orders"}>
        <Button className="w-full" onClick={createOrder} disabled={isLoading}>
          {isLoading ? "Processing..." : "Захиалга хийх"}
        </Button>
      </Link>
    </div>
  );
};

export default Checkout;
