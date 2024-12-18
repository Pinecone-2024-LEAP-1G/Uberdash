import { Schema, model, Model, models } from "mongoose";
import { User } from "./users.model";

export type Review = {
  _id: Schema.Types.ObjectId;
  userId: User;
  restaurantId: Schema.Types.ObjectId;
  comment: string;
  rating: number;
  createdAt: Date;
};
const ReviewSchema = new Schema<Review>(
  {
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
    userId: { type: Schema.Types.ObjectId, required: true, ref: "users" },
    restaurantId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "restaurants",
    },
    createdAt: { type: Date, default: Date.now() },
  },
  {
    timestamps: true,
  }
);

export const ReviewModel: Model<Review> =
  models.reviews || model<Review>("reviews", ReviewSchema);
