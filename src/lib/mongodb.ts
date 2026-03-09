import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;
const databaseName = process.env.MONGODB_DB || "chinaAtlas";

declare global {
  var __chinaAtlasMongoClientPromise: Promise<MongoClient> | undefined;
}

function createClient() {
  if (!uri) {
    throw new Error("MONGODB_URI is not configured.");
  }

  return new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
}

export function hasMongoConfig() {
  return Boolean(uri);
}

export async function getMongoClient() {
  if (!global.__chinaAtlasMongoClientPromise) {
    const client = createClient();
    global.__chinaAtlasMongoClientPromise = client.connect();
  }

  return global.__chinaAtlasMongoClientPromise;
}

export async function getDatabase() {
  const client = await getMongoClient();
  return client.db(databaseName);
}

export function getDatabaseName() {
  return databaseName;
}
