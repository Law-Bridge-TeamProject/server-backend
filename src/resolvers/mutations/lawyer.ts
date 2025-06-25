import { MutationResolvers } from "@/types/generated";
import { Lawyer } from "@/models";

export const createLawyer: MutationResolvers["createLawyer"] = async (
  parent,
  { input },
  context: { lawyerId: string | null }
) => {
  const lawyerId = context.lawyerId;

  if (!lawyerId) {
    throw new Error("Unauthorized: userId missing");
  }

  console.log("Creating lawyer with input:", input, "userId:", userId);

  const lawyer = await Lawyer.create({
    lawyerId: lawyerId,
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

export const updateLawyer: MutationResolvers["updateLawyer"] = async (
  parent: unknown,
  { lawyerId, input }
) => {
  console.log("Updating lawyer with userId:", lawyerId, "and input:", input);

  const existingLawyer;

  const updatedLawyer = {
    ...existingLawyer,
    ...input,
  };

  const savedLawyer = await dataSources.lawyerAPI.updateLawyer(
    lawyerId,
    updatedLawyer
  );

  return savedLawyer;
};
