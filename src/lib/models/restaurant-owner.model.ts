import { model, models, Schema } from "mongoose";

export type RestaurantOwner = {
  _id: string;
  email: string;
};

const RestaurantOwnerSchema = new Schema<RestaurantOwner>({
  email: { type: String, required: true },
});

export const RestaurantOwnerModel =
  models["restaurant-owner"] ||
  model<RestaurantOwner>("restaurant-owner", RestaurantOwnerSchema);
