
import { BlogList } from "@/components/blogs/BlogList";
import { PortfolioList } from "@/components/portfolios/PortfolioList";

async function getBlogs() {
  console.log("Fetching Blogs");
  const res = await fetch("http://localhost:3000/api/blogs", {cache: "no-cache"});
  console.log("Getting Blogs");
  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  return res.json();
}

async function getPortfolios() {
  console.log("Fetching Portfolios");
  const res = await fetch("http://localhost:3000/api/portfolios", {cache: "no-cache"});
  console.log("Getting Portfolios");

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  return res.json();
}

export default async function Home() {
  const {data: blogs} = await getBlogs();
  const {data: portfolios} = await getPortfolios();

  return (
    <>
      <BlogList blogs={blogs} />
      <PortfolioList portfolios={portfolios} />
    </>
  )
}
