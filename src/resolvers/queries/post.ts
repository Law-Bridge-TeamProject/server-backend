import { Post } from "@/models";

export const getPostsByLawyer = async (
  _: any,
  { lawyerId }: { lawyerId: string }
) => {
  return await Post.find({ lawyerId });
};

export const getPostById = async (_: any, { postId }: { postId: string }) => {
  return await Post.findById(postId);
};
