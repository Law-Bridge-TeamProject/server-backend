// app/api/graphql/route.ts
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import { typeDefs } from "@/schemas";
import { resolvers } from "@/resolvers";
import { connectDatabase } from "@/database";
import { startWsServer } from "@/lib/ws-server";

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
    typeDefs,
    resolvers,
    introspection: true,
  });
}

if (typeof window === "undefined") {
  const { createServer } = await import("http");
  const httpServer = createServer();
  startWsServer(httpServer);
  httpServer.listen(4001); 
}

const handler = async (req: NextRequest) => {
  const server = await initializeServer();

  return startServerAndCreateNextHandler<NextRequest, Context>(server, {
    context: async (req) => {
      const authorization = req.headers.get("Authorization") || "";
      const userId = authorization; // Clerk токен эсвэл JWT-ээс задлана

      return { req, userId };
    },
  })(req);
};

export const dynamic = "force-dynamic";
export { handler as GET, handler as POST };
