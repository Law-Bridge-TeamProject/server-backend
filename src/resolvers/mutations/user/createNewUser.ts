import { MutationResolvers, User } from "@/types/generated";

export const createNewuser: MutationResolvers["createNewuser"] = async (
  _: unknown,
  { input },
  {}
) => {
  console.log({ input });

  return input as User;
};
