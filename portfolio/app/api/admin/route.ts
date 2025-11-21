// ===============================
// FILE: app/api/admin/route.ts
// ===============================
import { NextResponse } from "next/server";
import { MongoClient, ObjectId } from "mongodb";

const MONGO_URI = process.env.MONGO_URI as string;
const ADMIN_KEY = process.env.ADMIN_KEY as string;

const DB_NAME = "contact";
const COLLECTION_NAME = "mails";

let client: MongoClient | null = null;

async function getClient() {
  if (!client) {
    client = new MongoClient(MONGO_URI);
    await client.connect();
  }
  return client;
}

function validateKey(key: string | null) {
  return key && key === ADMIN_KEY;
}

// GET mails (paginated 5 per request)
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const key = searchParams.get("key");
  const page = Number(searchParams.get("page") || 1);

  if (!validateKey(key)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const mongoClient = await getClient();
    const db = mongoClient.db(DB_NAME);
    const collection = db.collection(COLLECTION_NAME);

    const limit = 5;
    const skip = (page - 1) * limit;

    const mails = await collection
      .find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();

    return NextResponse.json({ success: true, mails });
  } catch (err) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}

// DELETE single or multiple mails
export async function DELETE(req: Request) {
  const body = await req.json();
  const { key, ids } = body;

  if (!validateKey(key)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const mongoClient = await getClient();
    const db = mongoClient.db(DB_NAME);
    const collection = db.collection(COLLECTION_NAME);

    const objectIds = ids.map((id: string) => new ObjectId(id));
    const result = await collection.deleteMany({ _id: { $in: objectIds } });

    return NextResponse.json({ success: true, deleted: result.deletedCount });
  } catch (err) {
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}