import { Model, Schema, models, model, ObjectId } from "mongoose";

export type Address = {
  orderId: ObjectId;
  userId: ObjectId;
  userName: string;
  phoneNumber: string;
  street: string;
  houseNumber: string;
  entranceNumber: string;
  appartmentNumber: string;
};

const AddressmeSchema = new Schema<Address>({
  orderId: { type: Schema.Types.ObjectId, ref: "orders", required: true },
  userId: { type: Schema.Types.ObjectId, ref: "users", required: true },
  userName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  street: { type: String, required: true },
  houseNumber: { type: String, required: true },
  entranceNumber: { type: String, required: true },
  appartmentNumber: { type: String, required: true },
});

export const AddressModel: Model<Address> =
  models.addresses || model<Address>("addresses", AddressmeSchema);
