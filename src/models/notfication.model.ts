import { Schema, model, Model, models } from "mongoose";

type NotificationSchemaType = {
    recipientClerkId: string; 
    type?: string; 
    content?: string;
    read?: boolean; 
    createdAt?: Date
}
const NotificationSchema = new Schema<NotificationSchemaType>({
    recipientClerkId: { type: String, required: true },
    type: { type: String }, // e.g. "appointment-booked", "admin-approved"
    content: String,
    read: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
  },{timestamps: true});

  export const Notification: Model<NotificationSchemaType> =
    models["Notification"] || model("Notification", NotificationSchema);
  