import { MutationResolvers } from "@/types/generated"
import { db } from "@/lib/db";

import { ObjectId } from "mongodb";

export const createChatRoomAfterAppointment: MutationResolvers["createChatRoom"] =
  async (parent: unknown, args, context) => {
    const { appointmentId } = args;
    const database = await db();
    const appointment = await database
      .collection("appointments")
      .findOne({ _id: new ObjectId(appointmentId) });

    if (!appointment) {
      throw new Error("Appointment not found");
    }

    const now = new Date();
    const appointmentDate = new Date(appointment.date);
    const fiveMinutesBefore = new Date(
      appointmentDate.getTime() - 5 * 60 * 1000
    );

    if (now < fiveMinutesBefore) {
      throw new Error(
        "Chat room can only be created within 5 minutes before the appointment time"
      );
    }

    const chatRoomDoc = {
      appointmentId: appointment._id,
      participants: appointment.participants,
      allowedMedia: appointment.allowedMedia || false,
    };
    const result = await database
      .collection("chatRooms")
      .insertOne(chatRoomDoc);

    return result.insertedId.toString();
  };