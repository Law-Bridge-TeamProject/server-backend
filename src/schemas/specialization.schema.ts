import { gql } from "graphql-tag";

export const specializationTypedefs = gql`
  enum SpecializationCategory {
    Criminal
    Civil
    Family
    Labor
    Property
    Immigration
    IntellectualProperty
    Administrative
    Tax
    Environmental
    Constitutional
  }

  type Specialization {
    specializationId: ID!
    categoryName: SpecializationCategory!
    Subscription: Boolean!
    pricePerHour: Int
  }

  input CreateSpecializationInput {
    categoryName: SpecializationCategory!
    Subscription: Boolean!
    pricePerHour: Int
  }

  type Query {
    getSpecializations: [Specialization!]!
    getSpecializationByCategory(
      categoryName: SpecializationCategory!
    ): Specialization
  }

  type Mutation {
    createSpecialization(input: CreateSpecializationInput!): Specialization!
    updateSpecialization(
      categoryName: SpecializationCategory!
      input: CreateSpecializationInput!
    ): Specialization
    deleteSpecialization(categoryName: SpecializationCategory!): Boolean
  }
`;
