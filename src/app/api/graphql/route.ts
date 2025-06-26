import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import { typeDefs } from "@/schemas";
import { resolvers } from "@/resolvers";
import { connectDatabase } from "../../../database";
import { verifyToken } from "@clerk/backend";
import mongoose from "mongoose";

let isDbConnected = false;

async function initializeServer() {
  if (!isDbConnected) {
    try {
      await connectDatabase();
      isDbConnected = true;
      console.log("✅ MongoDB холбогдлоо.");
    } catch (err) {
      console.error("❌ DB холбогдоход алдаа гарлаа:", err);
    }
  }

  return new ApolloServer<Context>({
    resolvers,
    typeDefs,
    introspection: true,
  });
}

const handler = async (req: NextRequest) => {
  const server = await initializeServer();

  return startServerAndCreateNextHandler<NextRequest, Context>(server, {
    context: async (req) => {
      const authorization = req.headers.get("Authorization") || "";
      const parsedToken = await verifyToken(authorization, {
        secretKey: process.env.CLERK_SECRET_KEY,
      });

      const userId = parsedToken.sub;
      const username = parsedToken.username as string | null;
      const role =
        ((parsedToken.publicMetadata as any)?.role as string | undefined) ??
        null;

      let clientId: string | null = null;
      let lawyerId: string | null = null;

      if (role === "user") {
        clientId = userId;
      } else if (role === "lawyer") {
        lawyerId = userId;
      }
      return {
        req,
        userId,
        username,
        role,
        clientId,
        lawyerId,
        db: mongoose.connection.db,
      };
    },
  })(req);
};

export const dynamic = "force-dynamic";
export { handler as GET, handler as POST };
