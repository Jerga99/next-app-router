import { delay } from ".";

export async function getBlogs() {
  await delay(1000);
  const res = await fetch("http://localhost:3001/api/blogs", {cache: "no-cache"});
  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  return res.json();
}

export async function getPortfolios() {
  console.log("Fetching Portfolios");
  await delay(4000);
  const res = await fetch("http://localhost:3001/api/portfolios", {cache: "no-cache"});

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  return res.json();
}
