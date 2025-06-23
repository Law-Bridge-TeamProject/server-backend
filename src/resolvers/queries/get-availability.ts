import { db } from "@/lib/db";
import { QueryResolvers } from "@/types/generated";

export const getAvailability:QueryResolvers["getAvailability"] = async (parent: unknown, { userId, date }) => {

    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
        throw new Error("Invalid date format. Use YYYY-MM-DD.");
    }
    
    const database = await db();
    const availabilityDocs = await database.collection("availability").find({ userId, date }).toArray();
    
    if (!availabilityDocs || availabilityDocs.length === 0) {
        throw new Error("No availability found for the specified user and date.");
    }

    const availabilities = availabilityDocs.map(doc => ({
        _id: doc._id.toString(),
        userId: doc.userId,
        date: doc.date,
        startTime: doc.startTime,
        endTime: doc.endTime,
    }));

    return availabilities;
}