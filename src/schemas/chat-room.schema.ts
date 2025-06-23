import {gql} from 'graphql-tag'

export const chatRoomSchema = gql`
  enum allowedMediaEnum {
    TEXT
    AUDIO
    VIDEO
    IMAGE
  }

  type ChatRoom {
    _id: String!
    participants: [String!]!
    appointmentId: String!
    allowedMedia: allowedMediaEnum
  }

  input CreateChatRoomInput {
    participants: [String!]!
    appointmentId: String!
    allowedMedia: Boolean
  }

  input UpdateChatRoomInput {
    _id: String!
    participants: [String!]
    appointmentId: String
    allowedMedia: Boolean
  }

  type Query {
    getChatRoomById(_id: String!): ChatRoom
    getChatRoomsByAppointment(appointmentId: String!): [ChatRoom!]!
  }

  type Mutation {
    # Only allow chat room creation after appointment has happened
    createChatRoomAfterAppointment(input: CreateChatRoomInput!): ChatRoom!
    updateChatRoom(input: UpdateChatRoomInput!): ChatRoom!
  }
`;