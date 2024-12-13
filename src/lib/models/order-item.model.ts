import { model, models, Schema } from "mongoose";

export type OrderItem = {
  _id: Schema.Types.ObjectId;
  price: number;
  quantity: number;
  orderId: Schema.Types.ObjectId;
  restaurantId: Schema.Types.ObjectId;
  menuItem: Schema.Types.ObjectId;
};

const OrderItemSchema = new Schema<OrderItem>(
  {
    price: { type: Number, required: true },
    quantity: { type: Number },
    orderId: { type: Schema.Types.ObjectId, ref: "orders", required: true },
    restaurantId: {
      type: Schema.Types.ObjectId,
      ref: "restaurants",
      required: true,
    },
    menuItem: { type: Schema.Types.ObjectId, ref: "menu-items" },
  },
  { timestamps: true }
);

export const OrderItemModel =
  models["order-items"] || model<OrderItem>("order-items", OrderItemSchema);
