import mongoose, { Schema } from "mongoose";

export type Order = {
  id: Schema.Types.ObjectId;
  status: string;
  orderItemCount: number;
  priceWithoutDiscount: number;
  priceWithDiscount: number;
  userId: Schema.Types.ObjectId;
<<<<<<< HEAD
  status: String;
  orderItemCount: String;
  district: String;
  Khoroo: String;
  Apartment: String;
  orderItems: any;
  updatedDate: any;
  createdDate: any;
=======
  cancelledTime?: Date;
  readyToStartTime?: Date;
  inPreparationTime?: Date;
  readyForPickupTime?: Date;
  onTheWayTime?: Date;
  deliveredTime?: Date;
  discountCodeId?: Schema.Types.ObjectId;
  deliveryAddressId?: Schema.Types.ObjectId;
>>>>>>> 40d06de (order model hiij duusgav)
};

const OrderSchema = new Schema<Order>({
  id: {
    type: Schema.Types.ObjectId,
    auto: true,
  },
  status: {
    type: String,
    required: true,
    enum: [
      "Pending",
      "Cancelled",
      "ReadyToStart",
      "InPreparation",
      "ReadyForPickup",
      "OnTheWay",
      "Delivered",
    ],
    default: "Pending",
  },
  orderItemCount: {
    type: Number,
    required: true,
  },
  priceWithoutDiscount: {
    type: Number,
    required: true,
  },
  priceWithDiscount: {
    type: Number,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  cancelledTime: {
    type: Date,
  },
<<<<<<< HEAD
  orderItemCount: {
    type: String,
=======
  readyToStartTime: {
    type: Date,
>>>>>>> 40d06de (order model hiij duusgav)
  },
  inPreparationTime: {
    type: Date,
  },
  readyForPickupTime: {
    type: Date,
  },
  onTheWayTime: {
    type: Date,
  },
  deliveredTime: {
    type: Date,
  },
  discountCodeId: {
    type: Schema.Types.ObjectId,
    ref: "DiscountCode",
  },
  deliveryAddressId: {
    type: Schema.Types.ObjectId,
    ref: "DeliveryAddress",
  },
});

const OrderModel = mongoose.model<Order>("Order", OrderSchema);
export default OrderModel;
