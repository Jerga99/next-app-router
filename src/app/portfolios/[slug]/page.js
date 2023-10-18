import { getPortfolioBySlug, getPortfolios } from "@/utils";

export function generateStaticParams() {
  const portfolios = getPortfolios();

  return portfolios.map(portfolio =>({
    slug: portfolio.slug
  }));
}

export default function PortfolioDetail({params}) {
  const portfolio = getPortfolioBySlug(params.slug);

  return (
    <>
      <div>Portfolio Data: {portfolio.title}, {portfolio.description}</div>

      <hr />

      <div>{portfolio.content}</div>
    </>
  )
}

