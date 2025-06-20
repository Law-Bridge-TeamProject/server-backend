import { Gender, QueryResolvers } from "@/types/generated";

export const getUser: QueryResolvers["getUser"] = async () => {
  return [
    {
      id: "1",
      age: 25,
      name: "John Doe",
      isAdmin: true,
      projects: ["Project A", "Project B"],
      gender: Gender.Male,
      car: {
        mark: "Lexus600",
      },
    },
  ];
};
