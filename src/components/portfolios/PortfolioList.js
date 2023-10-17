import { getPortfolios } from "@/utils/fetch";
import Image from "next/image";

export async function PortfolioList() {
  const {data: portfolios} = await getPortfolios();

  return (
    <>
      <div className="content-section-title">Portfolios</div>
      <div className="content-list">
        { portfolios.map(portfolio =>
          <div className="content-item" key={portfolio.id}>
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
            </div>
          </div>
        )}
      </div>
    </>
  )
}
