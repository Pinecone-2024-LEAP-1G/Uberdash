import { Schema, models, Model, model } from "mongoose";

type Restaurant = {
  _id: string;
  name: string;
  image: string;
  banner: string;
  info: string;
  rating: number;
};

const RestaurantSchema = new Schema<Restaurant>({
  name: { type: String, required: true },
  image: { type: String, required: true },
  banner: { type: String },
  info: { type: String },
  rating: { type: Number, default: 0 },
});

export const RestaurantModel: Model<Restaurant> =
  models.restaurants || model<Restaurant>("restaurants", RestaurantSchema);
