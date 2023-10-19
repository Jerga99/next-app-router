
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { BlogList } from "@/components/blogs/BlogList";
import { PortfolioList } from "@/components/portfolios/PortfolioList";

export default async function Home() {
  return (
    <>
      <Hero />
      <SectionTitle title={"Blogs"} href={"/blogs"}/>
      <BlogList />
      <SectionTitle title={"Portfolios"} href={"/portfolios"}/>
      <PortfolioList />
    </>
  )
}
