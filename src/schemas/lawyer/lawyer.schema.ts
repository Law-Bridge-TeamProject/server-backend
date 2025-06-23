import { gql } from "graphql-tag";

export const lawyerSchema = gql`
  type Lawyer {
    userId: String!
    verified: Boolean!
    firstName: String!
    lastName: String!
    email: String!
    bio: String
    experience: String
    rating: Int
    profilePicture: String
    specializations:  
  }
`;
