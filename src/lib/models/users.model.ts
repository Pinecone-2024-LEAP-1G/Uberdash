import { Model, Schema, model, models } from "mongoose";

export type User = {
  _id: Schema.Types.ObjectId;
  email: string;
  name: string;
  image: string;
};

const userSchema = new Schema<User>({
  email: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String },
});

export const UserModel: Model<User> =
  models.users || model<User>("users", userSchema);
