import { Review } from "@/models";

export const getReviewsByLawyer = async (
  _: unknown,
  { lawyerId }: { lawyerId: string }
) => {
  return await Review.find({ lawyerId }).sort({ createdAt: -1 });
};

export const getReviewsByUser = async (
  _: unknown,
  { clientId }: { clientId: string }
) => {
  return await Review.find({ clientId }).sort({ createdAt: -1 });
};
