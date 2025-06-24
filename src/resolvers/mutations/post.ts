import { Post } from "@/models";

export const createPost = async (
  _: unknown,
  {
    input,
  }: {
    input: {
      specializationId?: string;
      title: string;
      content: {
        text?: string;
        image?: string;
        video?: string;
        audio?: string;
      };
    };
  },
  context: {
    userId: string;
    role: string;
    lawyerId: string | null;
  }
) => {
  if (context.role !== "lawyer" || !context.lawyerId) {
    throw new Error("Only lawyers can create posts.");
  }

  const newPost = await Post.create({
    lawyerId: context.lawyerId,
    specializationId: input.specializationId,
    title: input.title,
    content: input.content,
    createdAt: new Date(),
  });

  return newPost;
};

export const updatePost = async (
  _: unknown,
  {
    postId,
    input,
  }: {
    postId: string;
    input: {
      specializationId?: string;
      title?: string;
      content?: {
        text?: string;
        image?: string;
        video?: string;
        audio?: string;
      };
    };
  },
  context: {
    userId: string;
    role: string;
    lawyerId: string | null;
  }
) => {
  if (context.role !== "lawyer" || !context.lawyerId) {
    throw new Error("Only lawyers can update posts.");
  }

  const post = await Post.findById(postId);
  if (!post) throw new Error("Post not found");

  if (post.lawyerId !== context.lawyerId) {
    throw new Error("Unauthorized: You can only edit your own posts.");
  }

  Object.assign(post, input);
  await post.save();

  return post;
};

export const deletePost = async (
  _: unknown,
  { postId }: { postId: string },
  context: {
    userId: string;
    role: string;
    lawyerId: string | null;
  }
) => {
  if (context.role !== "lawyer" || !context.lawyerId) {
    throw new Error("Only lawyers can delete posts.");
  }

  const post = await Post.findById(postId);
  if (!post) throw new Error("Post not found");

  if (post.lawyerId !== context.lawyerId) {
    throw new Error("Unauthorized: You can only delete your own posts.");
  }

  await post.deleteOne();
  return true;
};
