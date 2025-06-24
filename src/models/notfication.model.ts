import { Schema, model, Model, models } from "mongoose";

type NotificationSchemaType = {
  recipientClerkId: string;
  type?: string;
  content?: string;
  read?: boolean;
  createdAt?: Date;
};
const NotificationSchema = new Schema<NotificationSchemaType>(
  {
    recipientClerkId: { type: String, required: true },
    type: {
      type: String,
      enum: [
        "APPOINTMENT_REQUEST",
        "APPOINTMENT_CONFIRMATION",
        "APPOINTMENT_CANCELLATION",
        "APPOINTMENT_REMINDER",
        "APPOINTMENT_STARTED",
        "REVIEW_RECEIVED",
        "SPECIALIZATION_UPDATE",
      ],
      required: true,
    },
    content: String,
    read: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const Notification: Model<NotificationSchemaType> =
  models["Notification"] || model("Notification", NotificationSchema);
