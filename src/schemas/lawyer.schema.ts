import { gql } from "graphql-tag";

export const lawyerTypeDefs = gql`
  type Lawyer {
    lawyerId: String!
    verified: Boolean!
    firstName: String!
    lastName: String!
    email: String!
    licenseNumber: String!
    bio: String!
    experience: String!
    rating: Int
    profilePicture: String!
    specializations: [Specialization!]!
    achievements: Achievement!
  }

  input CreateLawyerInput {
    firstName: String!
    lastName: String!
    email: String!
    licenseNumber: String!
    bio: String!
    experience: String!
    profilePicture: String!
    specializations: [Specialization!]!
  }

  type Query {
    getLawyers: [Lawyer]
    getLawyerById(lawyerId: String!): Lawyer
    getLawyersBySpecialization(specialization: String!): [Lawyer]
  }

  type Mutation {
    createLawyer(input: CreateLawyerInput!): Lawyer
    updateLawyer(lawyerId: String!, input: CreateLawyerInput!): Lawyer
    deleteLawyer(lawyerId: String!): Boolean
  }
`;
