import { Schema, models, Model, model } from "mongoose";

type Restaurant = {
  _id: string;
  name: string;
  image: string;
  banner: string;
  info: string;
  rating: number;
  ownerId: Schema.Types.ObjectId;
};

const RestaurantSchema = new Schema<Restaurant>({
  name: { type: String, required: true },
  image: { type: String, required: true },
  banner: { type: String },
  info: { type: String },
  rating: { type: Number, default: 0 },
  ownerId: { type: Schema.Types.ObjectId, ref: "restaurant-owner" },
});

export const RestaurantModel: Model<Restaurant> =
  models.restaurants || model<Restaurant>("restaurants", RestaurantSchema);
