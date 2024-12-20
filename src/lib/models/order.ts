import { models, Schema, model } from "mongoose";
import { OrderItem } from "./order-item.model";

export type Order = {
  _id: Schema.Types.ObjectId;
  status:
    | "Хүлээгдэж байна"
    | "Цуцалсан"
    | "Хийж эхлэж байна"
    | "Хийгдэж дууссан"
    | "Хүргэлтэнд гархаар хүлээгдэж байна"
    | "Хүргэлтэнд явж байна"
    | "Хүргэгдсэн";
  orderItemCount: number;
  totalPrice: number;
  userId: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
  deliveryAddressId?: Schema.Types.ObjectId;
  orderItems: OrderItem[];
};

const OrderSchema = new Schema<Order>(
  {
    status: {
      type: String,
      required: true,
      enum: [
        "Хүлээгдэж байна",
        "Цуцалсан",
        "Хийж эхлэж байна",
        "Хийгдэж дууссан",
        "Хүргэлтэнд гархаар хүлээгдэж байна",
        "Хүргэлтэнд явж байна",
        "Хүргэгдсэн",
      ],
      default: "Хүлээгдэж байна",
    },
    orderItemCount: {
      type: Number,
    },

    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "users",
    },
    totalPrice: { type: Number },
    createdAt: { type: Date },
    updatedAt: { type: Date },
    deliveryAddressId: {
      type: Schema.Types.ObjectId,
      ref: "addresses",
    },
    orderItems: [{ type: Schema.Types.ObjectId, ref: "order-items" }],
  },
  { timestamps: true }
);

const OrderModel = models.orders || model<Order>("orders", OrderSchema);
export default OrderModel;
