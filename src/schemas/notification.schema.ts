import { gql } from "graphql-tag";

export const notificationTypeDefs = gql`
  enum NotificationType {
    APPOINTMENT_REQUEST
    APPOINTMENT_CONFIRMATION
    APPOINTMENT_CANCELLATION
    APPOINTMENT_REMINDER
    APPOINTMENT_STARTED
    REVIEW_RECEIVED
    SPECIALIZATION_UPDATE
  }

  type Notification {
    notificationId: ID!
    recipientId: ID!
    type: NotificationType!
    message: String!
    read: Boolean!
    createdAt: String!
  }

  extend type Query {
    getNotifications(userId: ID!): [Notification!]!
  }

  extend type Mutation {
    createNotification(
      userId: ID!
      lawyerId: ID!
      message: String!
    ): Notification!

    markNotificationAsRead(notificationId: ID!): Notification!
  }
`;
