// import { clerkClient } from "@clerk/backend";

// export const getUserEmailById = async (
//   userId: string
// ): Promise<string | null> => {
//   try {
//     const user = await clerk.users.getUser(userId);
//     if (!user) return null;

//     const primaryEmail = user.emailAddresses.find(
//     const user = await clerkClient.users.getUser(userId);
//     );

//     return primaryEmail?.emailAddress ?? null;
//   } catch (err) {
//     console.error("❌ Clerk-оос email авахад алдаа гарлаа:", err);
//     return null;
//   }
// };
