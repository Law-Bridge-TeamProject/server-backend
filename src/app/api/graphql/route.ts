// app/api/graphql/route.ts
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import { typeDefs } from "@/schemas";
import { resolvers } from "@/resolvers";
import { connectDatabase } from "@/database";
import { startWsServer } from "@/lib/ws-server";
import { verifyToken } from "@clerk/backend";
import mongoose from "mongoose";
import net from "net";

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

function isPortAvailable(port: number): Promise<boolean> {
  return new Promise((resolve) => {
    const tester = net
      .createServer()
      .once("error", () => resolve(false))
      .once("listening", () => tester.close(() => resolve(true)))
      .listen(port);
  });
}

if (typeof window === "undefined") {
  const port =5000;
  if (await isPortAvailable(port)) {
    const { createServer } = await import("http");
    const httpServer = createServer();
    startWsServer(httpServer);
    httpServer.listen(port, () => {
      console.log(`✅ WS server started on port ${port}`);
    });
  } else {
    console.log(`⚠️ Port ${port} is already in use, skipping WS server`);
  }
}

const handler = async (req: NextRequest) => {
  const server = await initializeServer();

  return startServerAndCreateNextHandler(server, {
    context: async (req: NextRequest) => {
      // Authorization header-аас токен унших
      const authorization =
        typeof req.headers.get === "function"
          ? req.headers.get("authorization") || ""
          : "";

      let userId: string | undefined = undefined;
      let clientId: string | undefined = undefined;
      let lawyerId: string | undefined = undefined;
      let username: string | undefined = undefined;
      let role: string | undefined = undefined;

      if (authorization.startsWith("Bearer ")) {
        try {
          // Clerk токен шалгах
          const parsedToken = await verifyToken(authorization, {
            secretKey: process.env.CLERK_SECRET_KEY!,
          });

          userId = parsedToken.sub;
          username = parsedToken.username as string | undefined;
          role =
            ((parsedToken.publicMetadata as any)?.role as string) ?? undefined;

          if (role === "user") {
            clientId = userId;
          } else if (role === "lawyer") {
            lawyerId = userId;
          }
        } catch (err) {
          console.warn("⚠️ Clerk token шалгах үед алдаа гарлаа.", err);
        }
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
