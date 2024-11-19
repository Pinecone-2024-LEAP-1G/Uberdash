import { Schema, model, Model, models } from "mongoose";

export type Discount = {
  _id: Schema.Types.ObjectId;
  name: string;
  active: boolean;
  time_used: number;
  max_used: number;
  discount_percent: number;
};
const DiscountSchema = new Schema<Discount>(
  {
    name: { type: String, required: true },
    active: { type: Boolean, default: true },
    time_used: { type: Number, required: true },
    max_used: { type: Number, required: true },
    discount_percent: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

export const DiscountModel: Model<Discount> =
  models.discounts || model<Discount>("discount", DiscountSchema);
