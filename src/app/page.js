
import { BlogList } from "@/components/blogs/BlogList";
import { PortfolioList } from "@/components/portfolios/PortfolioList";

import portfolios from "@/content/portfolios.json";

async function getBlogs() {
  console.log("Fetching Blogs");
  const res = await fetch("http://localhost:3000/api/blogs");
  console.log("Getting Blogs");
  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  return res.json();
}

export default async function Home() {
  const {data: blogs} = await getBlogs();

  return (
    <>
      <BlogList blogs={blogs} />
      <PortfolioList portfolios={portfolios} />
    </>
  )
}
