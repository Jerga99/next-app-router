

// http://localhost:3000/api/revalidate?tag=blogs&secret=asd098as90d8a

export async function POST(request) {

  return Response.json({data: "Hello Revalidate Endpoint!"});
}
