import { Schema, model, Model, models, Types } from "mongoose";
import { Media } from "@/types/generated";

type PostSchemaType = {
  lawyerId: string;
  title: string;
  content: {
    text?: string;
    image?: string;
    video?: string;
    audio?: string;
  };
  specialization: Types.ObjectId[];
  type: Media;
  createdAt: Date;
  updatedAt: Date;  
};

const PostSchema = new Schema<PostSchemaType>(
  {
    lawyerId: { type: String, required: true },
    title: { type: String, required: true },
    content: {
      text: { type: String },
      image: { type: String },
      video: { type: String },
      audio: { type: String },
    },
    specialization: [{ type: Schema.Types.ObjectId, ref: "Specialization" }],
    type: {
      type: String,
      enum: Object.values(Media),
      default: Media.Text,
      required: true,
    },
  },
  { timestamps: true }
);

export const Post: Model<PostSchemaType> =
  models.Post || model<PostSchemaType>("Post", PostSchema);
