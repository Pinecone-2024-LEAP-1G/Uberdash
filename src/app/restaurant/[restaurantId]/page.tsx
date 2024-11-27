import { RestaurantDetail } from "@/components/restaurant/RestaurantDetail";

const Store = async ({
  params,
}: {
  params: Promise<{ restaurantId: string }>;
}) => {
  const restaurantId = (await params).restaurantId;

  return <RestaurantDetail restaurantId={restaurantId} />;
};
export default Store;
