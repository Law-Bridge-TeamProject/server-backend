import { Post } from "@/models";
import { QueryResolvers } from "@/types/generated";

export const getPostsBySpecializationIds: QueryResolvers["getPostsBySpecializationId"] =
  async (_: unknown, { specializationId }, context) => {
    const posts = await Post.find({
      specialization: { $in: specializationId },
    }).sort({ createdAt: -1 });

    return posts;
  };
