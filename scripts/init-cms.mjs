import { createHash, randomBytes, scryptSync } from "node:crypto";
import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;
const databaseName = process.env.MONGODB_DB || "chinaAtlas";
const adminEmail = process.env.ADMIN_EMAIL;
const adminPassword = process.env.ADMIN_PASSWORD;

if (!uri) {
  throw new Error("MONGODB_URI is required.");
}

if (!adminEmail || !adminPassword) {
  throw new Error("ADMIN_EMAIL and ADMIN_PASSWORD are required.");
}

function hashPassword(password) {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");

  return `${salt}:${hash}`;
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  await client.connect();
  await client.db("admin").command({ ping: 1 });

  const database = client.db(databaseName);
  const adminUsers = database.collection("adminUsers");
  const cmsArticles = database.collection("cmsArticles");
  const feedbackEntries = database.collection("feedbackEntries");
  const now = new Date();

  await adminUsers.createIndex({ email: 1 }, { unique: true });
  await cmsArticles.createIndex({ slug: 1 }, { unique: true });
  await cmsArticles.createIndex({ status: 1, publishedAt: -1 });
  await feedbackEntries.createIndex({ status: 1, createdAt: -1 });

  const passwordHash = hashPassword(adminPassword);

  await adminUsers.updateOne(
    { email: adminEmail.toLowerCase() },
    {
      $set: {
        email: adminEmail.toLowerCase(),
        passwordHash,
        updatedAt: now,
      },
      $setOnInsert: {
        createdAt: now,
      },
    },
    { upsert: true },
  );

  console.log(
    JSON.stringify(
      {
        ok: true,
        database: databaseName,
        adminEmail: adminEmail.toLowerCase(),
        fingerprint: createHash("sha256").update(adminEmail.toLowerCase()).digest("hex").slice(0, 12),
      },
      null,
      2,
    ),
  );
} finally {
  await client.close();
}
