
import { BlogList } from "@/components/blogs/BlogList";
import { PortfolioList } from "@/components/portfolios/PortfolioList";
import { delay } from "@/utils";

async function getBlogs() {
  await delay(1000);
  const res = await fetch("http://localhost:3001/api/blogs", {cache: "no-cache"});
  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  return res.json();
}

async function getPortfolios() {
  console.log("Fetching Portfolios");
  await delay(2000);
  const res = await fetch("http://localhost:3001/api/portfolios", {cache: "no-cache"});

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  return res.json();
}

export default async function Home() {
  // --- sequentional fetching ---
  // const {data: blogs} = await getBlogs();
  // const {data: portfolios} = await getPortfolios();

  // --- parallel fetching ---
  const blogsPromise = getBlogs();
  const portfolioPromise = getPortfolios();

  const [blogs, portfolios] = await Promise.all([blogsPromise, portfolioPromise]);

  return (
    <>
      <BlogList blogs={blogs.data} />
      <PortfolioList portfolios={portfolios.data} />
    </>
  )
}
