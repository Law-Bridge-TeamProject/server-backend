import { gql } from "graphql-tag";

export const commentTypeDefs = gql`
  type Comment {
    postId: ID!
    commentId: ID!
    author: ID!
    content: String!
  }

  input CreateCommentInput {
    content: String
  }

  type Query {
    getCommentsByPost(postId: ID!): [Comment!]!
  }

  type Mutation {
    createComment(input: CreateCommentInput!): Comment!
    type Mutation {
  createComment(input: CreateCommentInput!): Comment!
  updateComment(input: UpdateCommentInput!): Comment!
  deleteComment(input: DeleteCommentInput!): Boolean!
}

  }
`;
