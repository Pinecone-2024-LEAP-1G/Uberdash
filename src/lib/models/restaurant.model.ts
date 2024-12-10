import { Schema, models, Model, model } from "mongoose";

export type Restaurant = {
  _id: string;
  name: string;
  image: string;
  banner: string;
  info: string;
  rating: number;
  ownerId: Schema.Types.ObjectId;
  menuItems: [Schema.Types.ObjectId];
};

const RestaurantSchema = new Schema<Restaurant>({
  name: { type: String, required: true },
  image: { type: String, required: true },
  banner: { type: String },
  info: { type: String },
  rating: { type: Number, default: 0 },
<<<<<<< Updated upstream
  ownerId: {
    type: Schema.Types.ObjectId,
    ref: "restaurant-owner",
    required: true,
  },
=======
  ownerId: { type: Schema.Types.ObjectId, ref: "restaurant-owner" },
  menuItems: { type: [Schema.Types.ObjectId], default: [], ref: "menu-items" },
>>>>>>> Stashed changes
});

export const RestaurantModel: Model<Restaurant> =
  models.restaurants || model<Restaurant>("restaurants", RestaurantSchema);
