import { Schema, model, Model, models, Types } from "mongoose";

enum MediaType {
  TEXT = "TEXT",
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
  FILE = "FILE",
}

type PostSchemaType = {
  lawyerId: string;
  title: string;
  content?: string;
  specialization?: Types.ObjectId[];
  type?: MediaType;
  createdAt?: Date;
};

const PostSchema = new Schema<PostSchemaType>(
  {
    lawyerId: String,
    title: { type: String, required: true },
    content: { type: String },
    specialization: [{ type: Schema.Types.ObjectId, ref: "Specialization" }],
    type: {
      enum: Object.values(MediaType),
      default: MediaType.TEXT,
      required: true,
    },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const Post: Model<PostSchemaType> =
  models["Post"] || model("Post", PostSchema);
