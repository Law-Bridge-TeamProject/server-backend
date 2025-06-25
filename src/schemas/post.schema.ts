import { gql } from "graphql-tag";

export const postTypeDefs = gql`
  enum Media {
    text
    image
    video
    audio
  }

  type Post {
    _id: ID!
    lawyerId: String!
    title: String!
    content: String!
    specialization: [String!]!
    type: Media!
    createdAt: Date!
    updateAt: Date!
  }

  input MediaInput {
    text: String
    image: String
    video: String
    audio: String
  }

  input CreatePostInput {
    specialization: [String!]!
    title: String!
    content: MediaInput!
  }

  input UpdatePostInput {
    specialization: [String!]!
    title: String
    content: MediaInput
  }

  type Query {
    getPostsByLawyer(lawyerId: String!): [Post!]!
    getPostById(postId: ID!): Post
    getPostsBySpecializationId(specializationId: ID!): [Post!]!
    searchPosts(query: String!): [Post!]!
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post!
    updatePost(postId: ID!, input: UpdatePostInput!): Post!
    deletePost(postId: ID!): Boolean!
  }
`;
