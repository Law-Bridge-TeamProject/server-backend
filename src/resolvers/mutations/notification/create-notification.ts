import { Notification } from "@/models";
import { MutationResolvers } from "@/types/generated";

export const createNotification: MutationResolvers["createNotification"] =
  async (_, { lawyerId, clientId, type, content }) => {
    const newNotification = await Notification.create({
      recipientClerkId: lawyerId,
      lawyerId,
      clientId: clientId ?? undefined,
      type,
      content,
      read: false,
      createdAt: new Date(),
    });

    return {
      id: newNotification._id.toString(),
      recipientClerkId: newNotification.recipientClerkId,
      lawyerId: newNotification.lawyerId,
      clientId: newNotification.clientId ?? undefined,
      type: newNotification.type,
      content: newNotification.content ?? "",
      read: newNotification.read ?? false,
      createdAt: newNotification.createdAt,
    };
  };
