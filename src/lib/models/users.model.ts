import { Model, Schema, model, models } from "mongoose";

type User = {
  _id: string;
  email: string;
};

const userSchema = new Schema<User>({
  email: { type: String, required: true },
});

export const UserModel: Model<User> =
  models.users || model<User>("users", userSchema);
