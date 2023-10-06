
import { BlogList } from "@/components/blogs/BlogList";
import { PortfolioList } from "@/components/portfolios/PortfolioList";

import blogs from "@/content/blogs.json";
import portfolios from "@/content/portfolios.json";

export default function Home() {
  return (
    <>
      <BlogList blogs={blogs} />
      <PortfolioList portfolios={portfolios} />
    </>
  )
}
