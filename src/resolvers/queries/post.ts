import { Post } from "@/models";

export const getPostsByLawyer = async (
  _: unknown,
  { lawyerId }: { lawyerId: string }
) => {
  return await Post.find({ lawyerId }).sort({ createdAt: -1 });
};

export const getPostById = async (
  _: unknown,
  { postId }: { postId: string }
) => {
  return await Post.findById(postId);
};

export const getPostBySpecializationId = async (
  _: unknown,
  { specializationId }: { specializationId: string }
) => {
  return await Post.find({ specializationId }).sort({ createdAt: -1 });
};
