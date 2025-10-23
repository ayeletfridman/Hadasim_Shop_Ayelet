import clientPromise from "@/lib/mongodb";

export async function getAllProducts() {
  const client = await clientPromise;
  const db = client.db("myshop");
  return db.collection("products").find({}).toArray();
}
