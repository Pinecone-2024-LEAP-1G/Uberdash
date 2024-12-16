"use client";

import { RestaurantDetail } from "@/components/restaurant/RestaurantDetail";

import { useParams } from "next/navigation";

const RestaurantDetailPage = () => {
  const { restaurantId } = useParams<{ restaurantId: string }>();

  return <RestaurantDetail restaurantId={restaurantId} />;
};
export default RestaurantDetailPage;
