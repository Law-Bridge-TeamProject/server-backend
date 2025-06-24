import { gql } from "graphql-tag";

export const postTypeDefs = gql`
  type Media {
    text: String
    image: String
    video: String
    audio: String
  }

  type Post {
    lawyerId: String!
    postId: ID!
    specializationId: ID
    title: String!
    content: Media!
    createdAt: Date!
  }

  input MediaInput {
    text: String
    image: String
    video: String
    audio: String
  }

  input CreatePostInput {
    specializationId: ID
    title: String!
    content: MediaInput!
  }

  input UpdatePostInput {
    specializationId: ID
    title: String
    content: MediaInput
  }

  type Query {
    getPostsByLawyer(lawyerId: String!): [Post!]!
    getPostById(postId: ID!): Post
    getPostBySpecializationId(specializationId: ID!): [Post!]!
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post!
    updatePost(postId: ID!, input: UpdatePostInput!): Post!
    deletePost(postId: ID!): Boolean!
  }
`;
