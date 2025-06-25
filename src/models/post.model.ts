import { Schema, model, Model, models, Types } from "mongoose";
import { Media } from "@/types/generated";

type PostSchemaType = {
  lawyerId: string;
  title: string;
  content: string;
  specialization: Types.ObjectId[];
  type: Media;
  createdAt: Date;
  updateAt: Date;
};

const PostSchema = new Schema<PostSchemaType>(
  {
    lawyerId: String,
    title: { type: String, required: true },
    content: { type: String },
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
  models["Post"] || model("Post", PostSchema);
