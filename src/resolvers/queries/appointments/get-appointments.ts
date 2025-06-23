import { QueryResolvers, AppointmentStatus } from "@/types/generated";

export const getAppointments: QueryResolvers["getAppointments"] = async (
) => {

interface Appointment {
    _id?: { toString: () => string };
    userId?: string;
    lawyerId?: string;
    schedule?: string;
    status?: string;
    chatRoomId?: { toString: () => string } | null;
    createdAt?: { toISOString: () => string };
    updatedAt?: { toISOString: () => string };
}

const appointments: Appointment[] = [];

  return appointments
    .filter((appointment): appointment is Appointment => !!appointment)
    .map((appointment) => ({
      _id: appointment._id?.toString?.() ?? "",
      userId: appointment.userId ?? "",
      lawyerId: appointment.lawyerId ?? "",
      schedule: appointment.schedule ?? "",
      status: (appointment.status as AppointmentStatus) ?? AppointmentStatus.Pending,
      chatRoomId: appointment.chatRoomId ? appointment.chatRoomId.toString() : undefined,
      createdAt: appointment.createdAt?.toISOString?.() ?? "",
      updatedAt: appointment.updatedAt?.toISOString?.() ?? "",
    }));
};
