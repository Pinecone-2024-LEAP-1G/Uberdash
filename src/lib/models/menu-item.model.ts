import { Model, Schema, model, models } from "mongoose";

export type MenuItem = {
<<<<<<< HEAD
<<<<<<< HEAD
  _id: string;
=======
  _id: Schema.Types.ObjectId;
>>>>>>> 5c0d7a8 (update)
=======
  _id: Schema.Types.ObjectId;
>>>>>>> 79d2559bf56d8996f392605d1deafc4cc128f659
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
