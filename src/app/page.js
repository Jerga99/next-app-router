
import { Hero } from "@/components/Hero";
import { BlogList } from "@/components/blogs/BlogList";
import { PortfolioList } from "@/components/portfolios/PortfolioList";

export default async function Home() {
  return (
    <>
      <Hero />
      <BlogList />
      <PortfolioList />
    </>
  )
}
