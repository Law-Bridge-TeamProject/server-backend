import { Comment } from "@/models";

export const createComment = async (
  _: any,
  { input }: { input: { postId: string; content: string } },
  { userId }: { userId: string }
) => {
  return await Comment.create({
    userId,
    postId: input.postId,
    content: input.content,
  });
};

export const updateComment = async (
  _: any,
  { input }: { input: { commentId: string; content: string } },
  { userId }: { userId: string }
) => {
  const comment = await Comment.findById(input.commentId);
  if (!comment) throw new Error("Comment not found");
  if (comment.userId !== userId) throw new Error("Unauthorized");

  comment.content = input.content;
  await comment.save();
  return comment;
};

export const deleteComment = async (
  _: any,
  { input }: { input: { commentId: string } },
  { userId }: { userId: string }
) => {
  const comment = await Comment.findById(input.commentId);
  if (!comment) throw new Error("Comment not found");
  if (comment.userId !== userId) throw new Error("Unauthorized");

  await comment.deleteOne();
  return true;
};
