import { NextResponse } from "next/server";
import blogs from "@/content/blogs.json";

export function GET() {
  return NextResponse.json({data: blogs});
}
