import { gql } from "graphql-tag";

export const commentTypeDefs = gql`
  scalar Date

  type Comment {
    postId: ID!
    commentId: ID!
    author: String!
    content: String!
    createdAt: Date!
  }

  input CreateCommentInput {
    postId: ID!
    author: String!
    content: String!
  }

  input UpdateCommentInput {
    commentId: ID!
    author: String!
    content: String!
  }

  input DeleteCommentInput {
    commentId: ID!
    author: String!
  }

  type Query {
    getCommentsByPost(postId: ID!): [Comment!]!
  }

  type Mutation {
    createComment(input: CreateCommentInput!): Comment!
    updateComment(input: UpdateCommentInput!): Comment!
    deleteComment(input: DeleteCommentInput!): Boolean!
  }
`;
