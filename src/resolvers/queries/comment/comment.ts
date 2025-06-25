import { Comment } from "@/models";

export const getCommentsByPost = async (
  _: unknown,
  { postId }: { postId: string }
) => {
  return await Comment.find({ postId }).sort({ createdAt: -1 });
};
