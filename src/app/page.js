
import { BlogList } from "@/components/blogs/BlogList";
import { PortfolioList } from "@/components/portfolios/PortfolioList";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <BlogList />
      <PortfolioList />
    </>
  )
}
