import { RestaurantDetail } from "@/components/restaurant/RestaurantDetail";
import { Schema } from "mongoose";

const Store = async ({
  params,
}: {
  params: Promise<{ restaurantId: Schema.Types.ObjectId }>;
}) => {
  const restaurantId = (await params).restaurantId;

  return <RestaurantDetail restaurantId={restaurantId} />;
};
export default Store;
