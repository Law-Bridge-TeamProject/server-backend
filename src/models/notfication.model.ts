import { Schema, model, Model, models } from "mongoose";

type NotificationSchemaType = {
  userId: string;
  type?: string;
  content?: string;
  read?: boolean;
};
const NotificationSchema = new Schema<NotificationSchemaType>(
  {
    userId: { type: String, required: true },
    type: { type: String }, // e.g. "appointment-booked", "admin-approved"
    content: String,
    read: { type: Boolean, default: false },
  },
  { timestamps: true }
);

  export const Notification: Model<NotificationSchemaType> =
    models["Notification"] || model("Notification", NotificationSchema);
  