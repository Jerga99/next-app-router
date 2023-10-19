
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { BlogList } from "@/components/blogs/BlogList";
import { PortfolioList } from "@/components/portfolios/PortfolioList";
import { getContentCount } from "@/utils";

export default async function Home() {
  const count = getContentCount();

  return (
    <>
      <Hero count={count} />
      <SectionTitle title={"Blogs"} href={"/blogs"}/>
      <BlogList />
      <SectionTitle title={"Portfolios"} href={"/portfolios"}/>
      <PortfolioList />
    </>
  )
}
