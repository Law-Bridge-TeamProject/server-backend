import { MutationResolvers } from "@/types/generated";
import { Lawyer } from "@/models";

export const createLawyer: MutationResolvers["createLawyer"] = async (
  parent,
  { input },
  context
) => {
  const userId = context.userId;

  if (!userId) {
    throw new Error("Unauthorized: userId missing");
  }

  console.log("Creating lawyer with input:", input, "userId:", userId);

  const lawyer = await Lawyer.create({
    lawyerId: userId,
    verified: false,
    firstName: input.firstName,
    lastName: input.lastName,
    email: input.email,
    bio: input.bio,
    experience: input.experience,
    rating: 0,
    profilePicture: input.profilePicture,
    specializations: input.specializations,
  });

  return lawyer;
};
