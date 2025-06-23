import { Comment } from "@/models";

export const getCommentsByPost = async (
  _: any,
  { postId }: { postId: string }
) => {
  return await Comment.find({ postId }).sort({ createdAt: -1 });
};
