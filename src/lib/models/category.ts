import { Model, Schema, model, models } from "mongoose";

type Category = {
  _id: Schema.Types.ObjectId;
  name: string;
  image: string;
};

const CategorySchema = new Schema<Category>({
  name: { type: String, required: true },
  image: { type: String, required: true },
});

export const CategoryModel: Model<Category> =
  models.categories || model<Category>("categories", CategorySchema);
