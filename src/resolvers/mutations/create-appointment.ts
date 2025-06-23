import { MutationResolvers, AppointmentStatus } from "@/types/generated";

export const createAppointment: MutationResolvers["createAppointment"] = async (parent: unknown, { input }, {userId}) => {
    console.log("Creating appointment with input:", input);

    const appointment = {
      _id: `${userId}`, 
      status:AppointmentStatus.Pending , 
      ...input, 
    };

    const now = new Date();

    const appointmentDate = new Date(input.schedule as string);

    if (appointmentDate > now) {
        return { ...appointment, chatRoomId: undefined };
    }

    const fiveMinutesBefore = new Date(appointmentDate.getTime() - 5 * 60 * 1000);
    if (now < fiveMinutesBefore) {
        return { ...appointment, chatRoomId: undefined };
    }
    return { ...appointment, chatRoomId: "generated-chat-room-id" };
};