
import { BlogList } from "@/components/blogs/BlogList";
import { PortfolioList } from "@/components/portfolios/PortfolioList";
import { delay } from "@/utils";

async function getBlogs() {
  console.log("Fetching Blogs");
  const random = Math.random();
  await delay(500);
  const res = await fetch("http://localhost:3001/api/blogs", {cache: "no-cache"});
  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  const blogs = await res.json();

  return {blogs, random};
}

async function getPortfolios() {
  console.log("Fetching Portfolios");
  await delay(1000);
  const res = await fetch("http://localhost:3001/api/portfolios", {cache: "no-cache"});

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  return res.json();
}

export default async function Home() {
  const {blogs, random} = await getBlogs();
  const {data: portfolios} = await getPortfolios();

  return (
    <>
      <h1>{random}</h1>
      <BlogList blogs={blogs.data} />
      <PortfolioList portfolios={portfolios} />
    </>
  )
}
