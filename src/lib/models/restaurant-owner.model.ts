import { Model, model, models, Schema } from "mongoose";

type RestaurantOwner = {
  _id: string;
  email: string;
  password: string;
};

const RestaurantOwnerSchema = new Schema<RestaurantOwner>({
  email: { type: String, required: true },
  password: { type: String },
});

export const RestaurantOwnerModel =
  models["restaurant-owner"] ||
  model<RestaurantOwner>("restaurant-owner", RestaurantOwnerSchema);
