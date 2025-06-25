import { Comment } from "@/models";
import { MutationResolvers } from "@/types/generated";

export const createComment: MutationResolvers[""] = async (
  _: unknown,
  { input }: { input: { postId: string; content: string } },
  context: { userId: string; username: string }
) => {
  if (!context.userId || !context.username) throw new Error("Unauthorized");

  const newComment = await Comment.create({
    postId: input.postId,
    author: context.username,
    content: input.content,
    createdAt: new Date(),
  });

  return newComment;
};

export const updateComment = async (
  _: unknown,
  { input }: { input: { commentId: string; content: string } },
  context: { userId: string; username: string }
) => {
  const comment = await Comment.findById(input.commentId);
  if (!comment) throw new Error("Comment not found");
  if (comment.author !== context.username) throw new Error("Unauthorized");

  comment.content = input.content;
  await comment.save();
  return comment;
};

export const deleteComment = async (
  _: unknown,
  { input }: { input: { commentId: string } },
  context: { userId: string; username: string }
) => {
  const comment = await Comment.findById(input.commentId);
  if (!comment) throw new Error("Comment not found");
  if (comment.author !== context.username) throw new Error("Unauthorized");

  await comment.deleteOne();
  return true;
};
