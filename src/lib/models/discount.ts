import { Schema, model, Model, models } from "mongoose";

export type Discount = {
  _id: Schema.Types.ObjectId;
  name: string;
  active: boolean;
  timeUsed: number;
  maxUsed: number;
  discountPercent: number;
};
const DiscountSchema = new Schema<Discount>(
  {
    name: { type: String, required: true },
    active: { type: Boolean, default: true },
    timeUsed: { type: Number, required: true },
    maxUsed: { type: Number, required: true },
    discountPercent: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

export const DiscountModel: Model<Discount> =
  models.discount || model<Discount>("discount", DiscountSchema);
