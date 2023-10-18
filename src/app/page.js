
import { BlogList } from "@/components/blogs/BlogList";
import { PortfolioList } from "@/components/portfolios/PortfolioList";
import { Suspense } from "react";

export default async function Home() {
  return (
    <>
      <BlogList />
    
      <Suspense fallback={<div>Loading Portfolios...</div>}>
        <PortfolioList />
      </Suspense>
    </>
  )
}
