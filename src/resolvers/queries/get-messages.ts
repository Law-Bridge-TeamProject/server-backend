import { db } from "@/lib/db";
import { QueryResolvers } from "@/types/generated";

export const getMessages: QueryResolvers["getMessages"] = async (
  parent: unknown,
  { chatRoomId }
) => {
  const database = await db();
  const messages = await database
    .collection("messages")
    .find({ chatRoomId })
    .toArray();
  return messages.map((message) => ({
    __typename: "Message",
    id: message._id.toString(),
    chatRoomId: message.chatRoomId.toString(),
    senderClerkId: message.senderClerkId,
    content: message.content ?? null,
    type: message.type,
  }));
};
