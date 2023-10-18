

export async function getBlogs() {
  const res = await fetch("http://localhost:3001/api/blogs");

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  return res.json();
}

export async function getPortfolios() {
  const res = await fetch("http://localhost:3001/api/portfolios");

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  return res.json();
}
