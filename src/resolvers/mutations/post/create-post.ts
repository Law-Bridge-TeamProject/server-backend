import { Post } from "@/models";
import { MutationResolvers } from "@/types/generated";

export const createPost: MutationResolvers["createPost"] = async (
  _: unknown,
  { input },
  context
) => {
  const { lawyerId } = context;
  if (!lawyerId) throw new Error("Unauthorized: Lawyer not authenticated");

  const newPost = await Post.create({
    lawyerId,
    title: input.title,
    content: input.content,
    specialization: input.specialization,
    type: input.content.image
      ? "image"
      : input.content.video
      ? "video"
      : input.content.audio
      ? "audio"
      : "text",
  });

  return {
    _id: newPost.id.toString(),
    lawyerId: newPost.lawyerId,
    title: newPost.title,
    content: newPost.content,
    specialization: newPost.specialization.map((s) => s.toString()),
    type: newPost.type,
    createdAt: newPost.createdAt,
    updatedAt: newPost.updatedAt,
  };
};
