import { Post } from "@/models";
import { QueryResolvers } from "@/types/generated";

export const getPostsByLawyer: QueryResolvers["getPostsByLawyer"] = async (
  _: unknown,
  { lawyerId },
  context
) => {
  const posts = await Post.find({ lawyerId }).sort({ createdAt: -1 });

  return posts.map((post) => ({
    ...post,
    _id: String(post._id),
    specialization: post.specialization.map((special) => String(special)),
  }));
};
