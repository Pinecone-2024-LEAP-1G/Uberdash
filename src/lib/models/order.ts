import { models, Schema, model } from "mongoose";

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
  priceWithoutDiscount: number;
  priceWithDiscount: number;
  totalPrice: number;
  userId: Schema.Types.ObjectId;
  cancelledTime?: Date;
  readyToStartTime?: Date;
  inPreparationTime?: Date;
  readyForPickupTime?: Date;
  onTheWayTime?: Date;
  deliveredTime?: Date;
  discountCodeId?: Schema.Types.ObjectId;
  deliveryAddressId?: Schema.Types.ObjectId;
  orderItems: Schema.Types.ObjectId[];
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
    priceWithoutDiscount: {
      type: Number,
    },
    priceWithDiscount: {
      type: Number,
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "users",
    },
    totalPrice: { type: Number },
    cancelledTime: Date,
    readyToStartTime: Date,
    inPreparationTime: Date,
    readyForPickupTime: Date,
    onTheWayTime: Date,
    deliveredTime: Date,
    discountCodeId: {
      type: Schema.Types.ObjectId,
      ref: "discounts",
    },
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
