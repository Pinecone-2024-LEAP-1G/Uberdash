import { Model, Schema, model, models } from "mongoose";

type Category = {
  _id: Schema.Types.ObjectId;
  name: string;
};

const CategorySchema = new Schema<Category>({
  name: { type: String, required: true },
});

export const CategoryModel: Model<Category> =
  models.Category || model<Category>("Category", CategorySchema);
