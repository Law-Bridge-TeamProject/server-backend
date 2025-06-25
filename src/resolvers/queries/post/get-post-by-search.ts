import { Post } from "@/models";
import { QueryResolvers } from "@/types/generated";

export const searchPosts: QueryResolvers["searchPosts"] = async (
  _: unknown,
  { query },
  context
) => {
  const regex = new RegExp(query, "i");

  const posts = await Post.find({
    $or: [{ title: { $regex: regex } }, { "content.text": { $regex: regex } }],
  }).sort({ createdAt: -1 });

  return posts;
};
