import { getPortfolioBySlug, getPortfolios } from "@/utils";

export function generateStaticParams() {
  const portfolios = getPortfolios();

  return portfolios.map(portfolio =>({
    slug: portfolio.slug
  }));
}

export default async function PortfolioDetail({params}) {
  const portfolio = await getPortfolioBySlug(params.slug);

  return (
    <div>
      <article className="prose lg:prose-lg markdown-image-50">
        <div dangerouslySetInnerHTML={{__html: portfolio.content}}></div>
      </article>
    </div>
  )
}

