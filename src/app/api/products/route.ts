import { NextResponse } from "next/server";
import { getAllProducts } from "../../services/server/product.service";

export async function GET() {
  try {
    const products = await getAllProducts();
    return NextResponse.json(products);
  } catch (err) {
    console.error("Failed to fetch products:", err);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
