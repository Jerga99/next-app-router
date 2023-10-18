import { getPortfolioBySlug } from "@/utils";




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

