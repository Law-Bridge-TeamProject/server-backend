import { gql } from "graphql-tag";

export const reviewsTypeDefs = gql`
  type Review {
    clientId: ID!
    lawyerId: ID!
    rating: Int!
    comment: String
    createdAt: Date!
  }

  input CreateReviewInput {
    rating: Int!
    comment: String
  }

  type Query {
    getReviewsByLawyer(lawyerId: ID!): [Review!]!
    getReviewsByUser(clientId: ID!): [Review!]!
  }

  type Mutation {
    createReview(clientId: ID!, input: CreateReviewInput!): Review!
    updateReview(
      clientId: ID!
      lawyerId: ID!
      input: CreateReviewInput!
    ): Review!
    deleteReview(clientId: ID!, lawyerId: ID!): Boolean
  }
`;
