import { Notification } from "@/models";
import { QueryResolvers } from "@/types/generated";

export const getNotificationsLawyer: QueryResolvers["getNotificationsLawyer"] =
  async (_, { lawyerId }) => {
    const notifications = await Notification.find({
      lawyerId,
    }).sort({ createdAt: -1 });

    return notifications.map((notification) => ({
      id: notification._id.toString(),
      recipientClerkId: notification.recipientClerkId,
      lawyerId: notification.lawyerId,
      clientId: notification.clientId ?? undefined,
      type: notification.type,
      content: notification.content ?? "",
      read: notification.read ?? false,
      createdAt: notification.createdAt ?? new Date(),
    }));
  };
