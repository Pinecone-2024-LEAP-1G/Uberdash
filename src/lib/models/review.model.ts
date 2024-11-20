import { Schema, model, Model, models } from "mongoose";

export type Review = {
  _id: Schema.Types.ObjectId;
  user_id: Schema.Types.ObjectId;
  restaurant_id: Schema.Types.ObjectId;
  comment: string;
  rating: number;
};
const ReviewSchema = new Schema<Review>(
  {
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
    user_id: { type: Schema.Types.ObjectId, required: true, ref: "users" },
    restaurant_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "restaurant",
    },
  },
  {
    timestamps: true,
  }
);

export const ReviewModel: Model<Review> =
  models.review || model<Review>("review", ReviewSchema);
