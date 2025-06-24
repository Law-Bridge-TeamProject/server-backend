import { Notification } from "@/models";

export const getNotifications = async (
  _: unknown,
  { userId }: { userId: string }
) => {
  return await Notification.find({ recipientId: userId }).sort({
    createdAt: -1,
  });
};
