import { gql } from "graphql-tag";

export const userTypeDefs = gql`
  enum Gender {
    MALE
    FEMALE
  }

  input CreateNewUserInput {
    id: String!
    age: Int!
    name: String!
    gender: Gender!
  }

  type Car {
    mark: String
  }

  type User {
    id: String!
    age: Int!
    name: String!
    gender: Gender!
    isAdmin: Boolean
    projects: [String]
    car: Car
  }

  type Query {
    getUser: [User!]!
  }
  type Mutation {
    createNewuser(input: CreateNewUserInput): User!
  }
`;
