import { db } from "@/lib/db";
import { MutationResolvers } from "@/types/generated";
import { pubsub } from "@/lib/pubsub";

export const createMessage: MutationResolvers["createMessage"] = async (
  _: unknown,
  { chatRoomId, senderClerkId, type, content }: any
) => {
  const database = await db();
  const insertResult = await database.collection("messages").insertOne({
    chatRoomId,
    senderClerkId,
    type,
    content,
  });

  const message = {
    id: insertResult.insertedId.toString(),
    chatRoomId,
    senderClerkId,
    type,
    content,
  };

  pubsub.publish("MESSAGE_ADDED_" + chatRoomId, {
    messageAdded: message,
  });

  return message;
};
