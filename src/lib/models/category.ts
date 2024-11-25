import { Model, Schema, model, models } from "mongoose";

export type CategoryType = {
  _id: Schema.Types.ObjectId;
  name: string;
  image: string;
};

const CategorySchema = new Schema<CategoryType>({
  name: { type: String, required: true },
  image: { type: String, required: true },
});

export const CategoryModel: Model<CategoryType> =
  models.categories || model<CategoryType>("categories", CategorySchema);
