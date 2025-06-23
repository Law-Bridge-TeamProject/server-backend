import { connectDatabase } from "@/database";
import { QueryResolvers } from "@/types/generated";

export const getAchievements: QueryResolvers["getAchievements"] = async (
  parent: unknown,
  { userId }
) => {
    const database = (await connectDatabase()) as unknown as import("mongodb").Db;
    if (!database) {
        throw new Error("Database connection failed");
    }
    const lawyer = await database.collection("lawyers").findOne({ userId });

    if (!lawyer) {
        return [];
    }

    const chatroomCount = Array.isArray(lawyer.chatrooms) ? lawyer.chatrooms.length : 0;
    const achievements = await database
      .collection("achievements")
      .find({ threshold: { $lte: chatroomCount } })
      .sort({ threshold: 1 })
      .toArray();

    return achievements.map((achievement) => ({
      _id: achievement._id.toString(),
      description: achievement.description,
      threshold: achievement.threshold,
      title: achievement.title,
      userId: achievement.userId,
      icon: achievement.icon,
    }));
};
