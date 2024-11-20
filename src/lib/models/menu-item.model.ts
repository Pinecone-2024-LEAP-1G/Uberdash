import { Model, Schema, model, models } from "mongoose";

type MenuItem = {
  _id: string;
  name: string;
  description: string;
  size: string;
  price: number;
  available: boolean;
  categoryId: Schema.Types.ObjectId;
};

const menuItemSchema = new Schema<MenuItem>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  size: { type: String },
  price: { type: Number },
  available: { type: Boolean, default: true },
<<<<<<< HEAD
  categoryId: { type: Schema.Types.ObjectId, required: true, ref: "categories" },
=======
  categoryId: { type: Schema.Types.ObjectId, required: true, ref: "category" },
>>>>>>> 2ca24f54d02e61077f42604e0017066b2d54208f
});

export const menuItemModel: Model<MenuItem> =
  models['menu-items'] || model<MenuItem>("menu-items", menuItemSchema);
