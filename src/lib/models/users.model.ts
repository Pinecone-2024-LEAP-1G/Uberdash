import { Model, Schema, model, models } from "mongoose";

export type User = {
  _id: Schema.Types.ObjectId;
  email: string;
  name: string;
  image: string;
  businessName: string;
  vatId: string;
  favourites: Schema.Types.ObjectId[];
};

const userSchema = new Schema<User>({
  email: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String },
  businessName: { type: String, default: "" },
  vatId: { type: String, default: "" },
  favourites: [{ type: Schema.Types.ObjectId, ref: "restaurants" }],
});

export const UserModel: Model<User> =
  models.users || model<User>("users", userSchema);
