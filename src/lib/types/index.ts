import { CategoryType } from "../models";
import { Review } from "../models";
import { MenuItem } from "../models";

export type Category = Omit<CategoryType, "_id"> & { _id: string };
export type ReviewType = Omit<Review, "_id"> & { _id: string };
export type MenuItemType = Omit<MenuItem, "_id"> & { _id: string };