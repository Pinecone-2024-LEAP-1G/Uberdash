import { Model, Schema, model, models } from "mongoose";

type MenuItem = {
  _id: string;
  name: string;
  description: string;
  size: string;
  price: number;
  available: boolean;
  image: string;
  categoryId: Schema.Types.ObjectId;
  restaurantId: Schema.Types.ObjectId;
};

const menuItemSchema = new Schema<MenuItem>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  size: { type: String },
  price: { type: Number },
  image: { type: String },
  available: { type: Boolean, default: true },
  categoryId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "categories",
  },
  restaurantId: { type: Schema.Types.ObjectId, ref: "restaurants" },
});

export const menuItemModel: Model<MenuItem> =
  models["menu-items"] || model<MenuItem>("menu-items", menuItemSchema);
