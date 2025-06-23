import { db } from "@/lib/db";
import { QueryResolvers } from "@/types/generated"

export const getAppointmentsByLawyer: QueryResolvers["getAppointmentsByLawyer"] = async (parent: unknown, { lawyerId }) => {

    if (!lawyerId) {
        throw new Error("Lawyer ID is required");
    }
    
    const database = await db();
    const appointments = await database.collection("appointments").find({ lawyerId }).toArray();
    
    if (!appointments || appointments.length === 0) {
        throw new Error("No appointments found for the specified lawyer.");
    }
    
    return appointments.map((appointment) => ({
        _id: appointment._id?.toString() ?? "",
        userId: appointment.userId ?? "",
        lawyerId: appointment.lawyerId ?? "",
        schedule: appointment.schedule ?? "",
        status: appointment.status ?? "Pending",
        chatRoomId: appointment.chatRoomId ? appointment.chatRoomId.toString() : undefined,
        createdAt: appointment.createdAt?.toISOString() ?? "",
        updatedAt: appointment.updatedAt?.toISOString() ?? "",
    }));
}