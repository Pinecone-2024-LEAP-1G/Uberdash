import { Model, Schema, model, models } from "mongoose";

type MenuItem = {
  _id: string;
  name: string;
  description: string;
  size: string;
  price: number;
  available: boolean;
  category_id: Schema.Types.ObjectId;
};

const menuItemSchema = new Schema<MenuItem>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  size: { type: String },
  price: { type: Number },
  available: { type: Boolean, default: true },
  category_id: { type: Schema.Types.ObjectId, required: true, ref: "Category" },
});

export const menuItemModel: Model<MenuItem> =
  models.MenuItem || model<MenuItem>("MenuItem", menuItemSchema);
