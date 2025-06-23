import { gql } from "graphql-tag";

export const messageTypeDefs = gql`
  enum MediaType {
    TEXT
    IMAGE
    VIDEO
    AUDIO
  }

  type Message {
    id: ID!
    chatRoomId: ID!
    senderClerkId: String!
    type: MediaType!
    content: String
  }
  type Query {
    getMessages(chatRoomId: ID!): [Message!]!
  }
  type Mutation {
    createMessage(
      chatRoomId: ID!
      senderClerkId: String!
      type: MediaType!
      content: String
    ): Message
  }
  type Subscription {
    messageAdded(chatRoomId: ID!): Message
  }
`;