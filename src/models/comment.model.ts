import { Schema, model, Model, models, Types } from "mongoose";

type CommentSchemaType = {
  post: Types.ObjectId;
  author: string;
  content: string;
};

const CommentSchema = new Schema<CommentSchemaType>(
  {
    post: { type: Schema.Types.ObjectId, ref: "Post", required: true },
    author: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

export const Comment: Model<CommentSchemaType> =
  models["Comment"] || model("Comment", CommentSchema);
