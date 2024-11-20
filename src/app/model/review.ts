import { Schema, model, Model, models } from "mongoose";

export type Review = {
  _id: Schema.Types.ObjectId;
  comment: string;
  rating: number;
};
const ReviewSchema = new Schema<Review>(
  {
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

export const ReviewModel: Model<Review> =
  models.discounts || model<Review>("review", ReviewSchema);
