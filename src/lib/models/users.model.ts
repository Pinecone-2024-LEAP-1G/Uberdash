import { Model, Schema, model, models } from "mongoose";

export type User = {
  _id: Schema.Types.ObjectId;
  name: string;
  email: string;
  image: string;
  favourites: Schema.Types.ObjectId[];
};

const userSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  image: String,
  favourites: [{ type: Schema.Types.ObjectId, ref: "restaurants" }],
});

export const UserModel: Model<User> =
  models.users || model<User>("users", userSchema);
