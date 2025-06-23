import { gql } from 'graphql-tag';

export const appointmentTypeDefs = gql`
  type Appointment {
    _id: ID!
    userId: ID!
    lawyerId: ID!
    schedule: String!
    status: AppointmentStatus!
    chatRoomId: ID
    createdAt: String
    updatedAt: String
  }
  
  enum AppointmentStatus {
    PENDING,
    CONFIRMED,
    COMPLETED,
    CANCELLED
  }
  
  input CreateAppointmentInput {
    userId: ID!
    lawyerId: ID!
    schedule: String!
  }
  
  input UpdateAppointmentStatusInput {
    appointmentId: ID!
    status: AppointmentStatus!
  }
  
  type Query {
  getAppointments: [Appointment]
  getAppointmentById(id: ID!): Appointment
  getAppointmentsByLawyer(lawyerId: ID!): [Appointment]
  getAppointmentsByUser(userId: ID!): [Appointment]
}

type Mutation {
  createAppointment(input: CreateAppointmentInput!): Appointment
  updateAppointmentStatus(input: UpdateAppointmentStatusInput!): Appointment
  deleteAppointment(id: ID!): Boolean
}
`;


  