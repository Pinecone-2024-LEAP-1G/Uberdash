import { Model, Schema, model, models } from "mongoose";

type User = {
  _id: Schema.Types.ObjectId;
  email: string;
  password: string;
};

const userSchema = new Schema<User>({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export const UserModel: Model<User> =
  models.user || model<User>("user", userSchema);
