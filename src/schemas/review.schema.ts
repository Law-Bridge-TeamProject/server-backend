import { gql } from "graphql-tag";

export const reviewsTypeDefs = gql`
  type Review {
    userId: ID!
    lawyerId: ID!
    rating: Int!
    comment: String
  }

  input CreateReviewInput {
    rating: Int!
    comment: String
  }

  type Query {
    getReviewsByLawyer(lawyerId: ID!): [Review!]!
    getReviewsByUser(userId: ID!): [Review!]!
  }

  type Mutation {
    createReview(lawyerId: ID!, input: CreateReviewInput!): Review!
    updateReview(userId: ID!, lawyerId: ID!, input: CreateReviewInput!): Review!
    deleteReview(userId: ID!, lawyerId: ID!): Boolean
  }
`;
