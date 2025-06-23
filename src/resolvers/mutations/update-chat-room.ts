import { MutationResolvers,  } from "@/types/generated";

export const updateChatRoom:MutationResolvers["updateChatRoom"] = async (parent: unknown,{ input }, context: any) => {
  const { _id, participants, appointmentId, allowedMedia } = input;

  const database = await context.db();
  const chatRoom = await database.collection("chatRooms").findOne({ _id });

  if (!chatRoom) {
    throw new Error("Chat room not found");
  }

  const updateFields: any = {};
  if (participants !== undefined) {
    updateFields.participants = participants;
  }
  if (appointmentId !== undefined) {
    updateFields.appointmentId = appointmentId;
  }
  if (allowedMedia !== undefined) {
    updateFields.allowedMedia = allowedMedia;
  }

  const result = await database.collection("chatRooms").updateOne(
    { _id },
    { $set: updateFields }
  );

  if (result.modifiedCount === 0) {
    throw new Error("No changes made to the chat room");
  }

  return database.collection("chatRooms").findOne({ _id });
}