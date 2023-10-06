import { NextResponse } from "next/server";
import portfolios from "@/content/portfolios.json";

export function GET() {
  return NextResponse.json({data: portfolios});
}
