import { Notification } from "@/models";
import { QueryResolvers } from "@/types/generated";

export const getNotifications: QueryResolvers["getNotifications"] = async (
  _,
  { userId }
) => {
  const notifications = await Notification.find({
    recipientClerkId: userId,
  }).sort({ createdAt: -1 });

  return notifications.map((n) => ({
    id: n._id.toString(),
    recipientClerkId: n.recipientClerkId,
    lawyerId: n.lawyerId,
    clientId: n.clientId ?? undefined,
    type: n.type,
    content: n.content ?? "",
    read: n.read ?? false,
    createdAt: n.createdAt ?? new Date(),
  }));
};
