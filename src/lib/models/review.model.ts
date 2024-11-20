import { Schema, model, Model, models } from "mongoose";

export type Review = {
  _id: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
  restaurantId: Schema.Types.ObjectId;
  comment: string;
  rating: number;
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
  },
  {
    timestamps: true,
  }
);

export const ReviewModel: Model<Review> =
  models.reviews || model<Review>("reviews", ReviewSchema);
