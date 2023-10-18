
import { revalidateTag } from "next/cache";

// http://localhost:3000/api/revalidate?tag=blogs&secret=asd098as90d8a

export async function POST(request) {
  const tag = request.nextUrl.searchParams.get("tag");
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret != process.env.REVALIDATION_TOKEN) {
    return Response.json({message: "Invalid Secret!"}, {status: 401});
  }

  if (!tag) {
    return Response.json({message: "Missing tag param!"}, {status: 400});
  }

  revalidateTag(tag)

  return Response.json({revalidated: true, now: Date.now()});
}
