
import { BlogList } from "@/components/blogs/BlogList";
import { PortfolioList } from "@/components/portfolios/PortfolioList";

async function getBlogs() {
  const res = await fetch("http://localhost:3001/api/blogs", {cache: "no-cache"});
  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  return res.json();
}

async function getPortfolios() {
  const res = await fetch("http://localhost:3001/api/portfolios", {cache: "no-cache"});

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
