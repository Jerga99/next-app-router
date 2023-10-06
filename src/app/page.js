
import blogs from "@/content/blogs.json";
import portfolios from "@/content/portfolios.json";
import Image from "next/image";


export default function Home() {

  return (
    <>
      <div className="content-section-title">Blogs</div>
      <div className="content-list">
        { blogs.map(blog =>
          <div className="content-item" key={blog.id}>
            <div className="content-item__image-container">
              <Image 
                src={blog.coverImage} 
                style={{objectFit: "cover"}}
                fill={true}
                sizes="(max-width: 768px)"
                alt={blog.title} 
              />
            </div>
            <div className="content-item__header">
              <div>{blog.title}</div>
              <div>{blog.description}</div>
            </div>
          </div>
        )}
      </div>
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
