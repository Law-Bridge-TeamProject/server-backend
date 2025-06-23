import { gql } from "graphql-tag";

export const availabilityTypeDefs = gql`
  enum DayOfWeek {
    MONDAY
    TUESDAY
    WEDNESDAY
    THURSDAY
    FRIDAY
    SATURDAY
    SUNDAY
  }

  type Availability {
    _id: ID!
    userId: ID!
    date: DayOfWeek!
    startTime: String!
    endTime: String!
  }

  type Query {
    getAvailability(userId: ID!, date: String!): [Availability]
  }

  type Mutation {
    setAvailability(
      userId: ID!
      date: String!
      startTime: String!
      endTime: String!
    ): Availability
  }
`;
