
import { BlogList } from "@/components/blogs/BlogList";
import { PortfolioList } from "@/components/portfolios/PortfolioList";

export default async function Home() {
  return (
    <>
      <BlogList />
      <PortfolioList />
    </>
  )
}
