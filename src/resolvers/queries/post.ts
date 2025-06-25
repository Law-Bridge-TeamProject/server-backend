import { Post } from "@/models";
import { QueryResolvers } from "@/types/generated";

export const getPostsByLawyer: QueryResolvers["getPostsByLawyer"] = async (
  _: unknown,
  { lawyerId },
  context
) => {
  const posts = await Post.find({ lawyerId }).sort({ createdAt: -1 });
  return posts.map((post) => ({
    postId: post._id.toString(),
    content: post.content,
    lawyerId: post.lawyerId,
    specializationId: post.specializationId,
    title: post.title,
    __typename: "Post",
  }));
};

export const getPostById: QueryResolvers["getPostById"] = async (
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
