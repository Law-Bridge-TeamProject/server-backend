import { MongoClient, Db } from "mongodb";

let cachedDb: Db | null = null;

export async function db(): Promise<Db> {
  if (cachedDb) return cachedDb;
  const client = await MongoClient.connect(process.env.MONGODB_URI as string);
  const db = client.db(process.env.MONGODB_DB as string);
  cachedDb = db;
  return db;
}
