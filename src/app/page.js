
import { BlogList } from "@/components/blogs/BlogList";
import { PortfolioList } from "@/components/portfolios/PortfolioList";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <Link href="/todos/1">Todo 1</Link>
      <Link href="/todos/2">Todo 2</Link>
      <BlogList />
      <PortfolioList />
    </>
  )
}
