import { NextResponse } from "next/server";
import blogs from "@/content/blogs.json";
import { delay } from "@/utils";

export async function GET() {
  await delay(2000);
  return NextResponse.json({data: blogs});
}
