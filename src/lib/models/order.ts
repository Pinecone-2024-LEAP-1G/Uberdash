import mongoose, { Schema } from "mongoose";

export type Order = {
  userId: Schema.Types.ObjectId;
  status: String;
  orderStatus: String;
  district: String;
  Khoroo: String;
  Apartment: String;
  orderItems: any;
  updatedDate: any;
  createdDate: any;
};
const OrderSchema = new Schema<Order>({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  status: {
    type: String,
    required: true,
  },
  orderStatus: {
    type: String,
    enum: ["Ordered", "PreparingToShip", "Shipped", "Delivered"],
    default: "Ordered",
  },
  district: { type: String, required: true },
  Khoroo: {
    type: String,
    required: true,
  },
  Apartment: {
    type: String,
    required: true,
  },
  orderItems: [{ type: Schema.Types.ObjectId, ref: "OrderItems" }],
  createdDate: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now },
});

const OrderModel = mongoose.model<Order>("Order", OrderSchema);
export default OrderModel;
