import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartItem, useCart } from "@/Providers/CartProvider";
import { useEffect, useState } from "react";
import axios from "axios";
import { Address, Restaurant } from "@/lib/models";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { ObjectId } from "mongoose";
import OrderAddress from "./OrderAddress";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const { cartItems, clearCart } = useCart();
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [orderAddress, setOrderAddress] = useState<Address>();
  const router = useRouter();

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
      deliveryAddressId: orderAddress?._id,
      orderItems: [],
    };
    try {
      const { data } = await axios.post(`/api/order`, orderData);
      return data.order;
    } catch (error) {
      console.log("Error creating order:", error);
      return null;
    }
  };

  const postOrderItem = async (
    cartItem: CartItem,
    orderId: ObjectId | undefined
  ) => {
    try {
      const orderItem = {
        price: cartItem.price,
        quantity: cartItem.quantity,
        orderId,
        restaurantId: cartItem.restaurantId,
        menuItem: cartItem._id,
      };
      await axios.post(`/api/orderItem`, orderItem);
    } catch (error) {
      console.log("Error posting order item:", error);
    }
  };

  const createOrder = async () => {
    if (!session?.user.id || cartItems.length === 0) return;
    setIsLoading(true);
    router.push("/orders");
    try {
      const order = await postOrder();
      if (order && order._id) {
        for (const cartItem of cartItems) {
          await postOrderItem(cartItem, order._id);
        }
        clearCart();
      }
    } catch (error) {
      console.log("Error during order creation:", error);
    } finally {
      setIsLoading(false);
    }
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
      <Button
        className={`w-full ${!orderAddress ? "hidden" : "block"} mb-6`}
        onClick={createOrder}
        disabled={isLoading}
      >
        {isLoading ? "Processing..." : "Захиалга хийх"}
      </Button>
      <div className="w-full h-20">
        <OrderAddress
          setOrderAddress={setOrderAddress}
          orderAddress={orderAddress}
        />
      </div>
    </div>
  );
};

export default Checkout;
