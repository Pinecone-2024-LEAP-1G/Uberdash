import { Model, Schema, model, models } from "mongoose";

export type User = {
  _id: Schema.Types.ObjectId;
  email: string;
  password: string;
};

const userSchema = new Schema<User>({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export const UserModel: Model<User> =
  models.users || model<User>("users", userSchema);
