import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import { typeDefs } from "@/schemas";
import { resolvers } from "@/resolvers";
import { connectDatabase } from "../../../database";

// 👇 DB холболтоо хийнэ
await connectDatabase(); // ApolloServer-оос өмнө холбох шаардлагатай!

const server = new ApolloServer<Context>({
  resolvers,
  typeDefs,
  introspection: true,
});

const handler = startServerAndCreateNextHandler<NextRequest, Context>(server, {
  context: async (req) => {
    const authorization = req.headers.get("Authorization") || "";
    const userId = authorization;

    console.log("Authorization header:", { authorization });

    return { req, userId };
  },
});

export const dynamic = "force-dynamic";
export { handler as GET, handler as POST };
