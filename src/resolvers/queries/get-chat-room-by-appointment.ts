import { db } from "@/lib/db";
import { QueryResolvers } from "@/types/generated";

export const getChatRoomsByAppointment: QueryResolvers["getChatRoomsByAppointment"] =
  async (parent: unknown, { appointmentId }) => {
    const database = await db();
    const chatRoom = await database
      .collection("chatRooms")
      .findOne({ appointmentId });

    if (!chatRoom) {
      throw new Error("Chat room not found for the given appointment");
    }

    const mappedChatRoom = {
      _id: chatRoom._id.toString(),
      appointmentId: chatRoom.appointmentId,
      participants: chatRoom.participants,
      allowedMedia: chatRoom.allowedMedia,
    };

    return [mappedChatRoom];
  };
