
import { getPortfolios } from "@/utils";
import Image from "next/image";
import Link from "next/link";

export async function PortfolioList() {
  const portfolios = getPortfolios();

  return (
    <>
      <div className="content-section-title">Portfolios</div>
      <div className="content-list">
        { portfolios.map(portfolio =>
          <div className="content-item" key={portfolio.slug}>
            <div className="content-item__image-container">
              <Image 
                src={portfolio.coverImage} 
                fill={true} 
                style={{objectFit: "cover"}}
                sizes="(max-width: 768px)"
                alt={portfolio.title} 
              />
            </div>
            <div className="content-item__header">
              <div>{portfolio.title}</div>
              <div>{portfolio.description}</div>
              <Link href={`/portfolios/${portfolio.slug}`}>See More</Link>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
