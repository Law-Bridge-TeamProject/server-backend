import {gql} from 'graphql-tag';

export const achievementTypeDefs = gql`
  type Achievement {
    _id: ID!
    userId: ID!
    title: String!
    description: String!
    threshold: Int!
    icon: String
  }

  type Query {
    getAchievements(userId: ID!): [Achievement]
  }
`