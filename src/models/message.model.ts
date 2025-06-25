import { Schema, model, Model, models, Types } from "mongoose";

enum MediaType {
  TEXT = "TEXT",
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
  AUDIO = "AUDIO",
}

type MessageSchemaType = {
  chatRoomId: Types.ObjectId;
  senderClerkId: string;
  type: string;
  content: string;
  createdAt?: Date;
};

const MessageSchema = new Schema<MessageSchemaType>(
  {
    chatRoomId: { type: Schema.Types.ObjectId, ref: "ChatRoom" },
    senderClerkId: { type: String, required: true },
    type: {
      type: String,
      enum: Object.values(MediaType) as string[],
      default: "TEXT",
      required: true,
    },
    content: String,
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const Message: Model<MessageSchemaType> =
  models["Message"] || model("Message", MessageSchema);
