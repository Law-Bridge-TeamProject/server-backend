// import { Clerk } from "@clerk/backend";

// const clerk = new Clerk({
//   apiKey: process.env.CLERK_SECRET_KEY,
// });

// export const getUserEmailById = async (
//   userId: string
// ): Promise<string | null> => {
//   try {
//     const user = await clerk.users.getUser(userId);
//     if (!user) return null;

//     const primaryEmail = user.emailAddresses.find(
//       (email) => email.id === user.primaryEmailAddressId
//     );

//     return primaryEmail?.emailAddress ?? null;
//   } catch (err) {
//     console.error("❌ Clerk-оос email авахад алдаа гарлаа:", err);
//     return null;
//   }
// };
