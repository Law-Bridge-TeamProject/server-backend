import { QueryResolvers } from "@/types/generated";
import { db } from "@/lib/db";
import { ObjectId } from "mongodb";

  type GetAppointmentByIdArgs = { id: string };
  
  export const getAppointmentById: QueryResolvers["getAppointmentById"] = async (
    _parent,
    args: GetAppointmentByIdArgs
  ) => {
    const { id } = args;
    const database = await db();
  
    const appointment = await database.collection("appointments").findOne({ _id: new ObjectId(id) });
  
    if (!appointment) {
      throw new Error(`Appointment with ID ${id} not found`);
    }

  return {
    _id: appointment._id.toString(),
    userId: appointment.userId,
    lawyerId: appointment.lawyerId,
    schedule: appointment.schedule,
    status: appointment.status,
    chatRoomId: appointment.chatRoomId ? appointment.chatRoomId.toString() : null,
    createdAt: appointment.createdAt.toISOString(),
    updatedAt: appointment.updatedAt.toISOString(),
  };
}