import { Schema, models, Model, model } from "mongoose";

type Location = {
  type: "Point";
  coordinates: [number, number];
};

type Restaurant = {
  _id: string;
  name: string;
  location: Location;
  image: string;
  banner: string;
  info: string;
  rating: number;
  reviews: [Schema.Types.ObjectId];
};

const RestaurantSchema = new Schema<Restaurant>({
  name: { type: String, required: true },
  location: { type: Location, required: true },
  image: { type: String, required: true },
  banner: { type: String },
  info: { type: String },
  rating: { type: Number, default: 0 },
  reviews: { type: [Schema.Types.ObjectId], default: [] },
});

export const RestaurantModel: Model<Restaurant> =
  models.Restaurant || model<Restaurant>("Restaurant", RestaurantSchema);
