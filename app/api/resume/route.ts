import { head } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const blob = await head("cv_full.pdf");
    return NextResponse.json({ url: blob.url });
  } catch {
    return NextResponse.json({ url: null });
  }
}
