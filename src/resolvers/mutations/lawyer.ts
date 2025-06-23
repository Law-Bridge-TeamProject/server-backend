import { MutationResolvers } from "@/types/generated";
import { Lawyer } from "@/models";

export const updateLawyer: MutationResolvers["updateLawyer"] = async (
  parent: unknown,
  { userId, input }
) => {
  console.log("Updating lawyer with userId:", userId, "and input:", input);

  const existingLawyer;

  const updatedLawyer = {
    ...existingLawyer,
    ...input,
  };

  const savedLawyer = await dataSources.lawyerAPI.updateLawyer(
    userId,
    updatedLawyer
  );

  return savedLawyer;
};
