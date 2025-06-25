import { Review } from "@/models";

export const createReview = async (
  _: unknown,
  {
    lawyerId,
    input,
  }: { lawyerId: string; input: { rating: number; comment?: string } },
  context: ) => {
  const clientId = context.clientId;
  if (!clientId) throw new Error("Зөвхөн хэрэглэгч review бичиж болно");

  const review = await Review.create({
    clientId,
    lawyerId,
    rating: input.rating,
    comment: input.comment,
    createdAt: new Date(),
  });

  return review;
};
