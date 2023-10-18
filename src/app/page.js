
import { BlogList } from "@/components/blogs/BlogList";
import { PortfolioList } from "@/components/portfolios/PortfolioList";
import { Suspense } from "react";

export const revalidate = 2;

export default async function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading Blogs...</div>}>
        <BlogList />
      </Suspense>

      <Suspense fallback={<div>Loading Portfolios...</div>}>
        <PortfolioList />
      </Suspense>
    </>
  )
}
