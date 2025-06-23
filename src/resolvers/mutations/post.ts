import { Post } from "@/models";

export const createPost = async (
  _: any,
  { input }: { input: any },
  { userId }: { userId: string }
) => {
  if (!userId) throw new Error("Unauthorized");

  const newPost = await Post.create({
    lawyerId: userId,
    specializationId: input.specializationId,
    title: input.title,
    content: input.content,
  });

  return newPost;
};

export const updatePost = async (
  _: any,
  { postId, input }: { postId: string; input: any },
  { userId }: { userId: string }
) => {
  const post = await Post.findById(postId);
  if (!post) throw new Error("Post not found");
  if (post.lawyerId !== userId) throw new Error("Unauthorized");

  Object.assign(post, input);
  await post.save();
  return post;
};

export const deletePost = async (
  _: any,
  { postId }: { postId: string },
  { userId }: { userId: string }
) => {
  const post = await Post.findById(postId);
  if (!post) throw new Error("Post not found");
  if (post.lawyerId !== userId) throw new Error("Unauthorized");

  await post.deleteOne();
  return true;
};
