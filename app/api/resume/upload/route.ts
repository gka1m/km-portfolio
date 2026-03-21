import { put } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const file = form.get("file") as File;

  const blob = await put("cv_full.pdf", file, {
    access: "public",
    allowOverwrite: true,
  });

  return NextResponse.json({ url: blob.url });
}
