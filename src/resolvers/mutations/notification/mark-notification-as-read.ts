import { Notification } from "@/models";
import { MutationResolvers } from "@/types/generated";

export const markNotificationAsRead: MutationResolvers["markNotificationAsRead"] =
  async (_, { notificationId }) => {
    const notification = await Notification.findByIdAndUpdate(
      notificationId,
      { read: true },
      { new: true }
    );

    if (!notification) {
      throw new Error("Notification not found");
    }

    return {
      id: notification._id.toString(),
      recipientClerkId: notification.recipientClerkId,
      lawyerId: notification.lawyerId,
      clientId: notification.clientId ?? undefined,
      type: notification.type,
      content: notification.content ?? "",
      read: notification.read ?? false,
      createdAt: notification.createdAt,
    };
  };
