
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
                objectFit="cover"
                fill={true}
                alt={blog.title} 
              />
            </div>
            <div>{blog.title}</div>
            <div>{blog.description}</div>
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
                objectFit="cover"
                alt={portfolio.title} 
              />
            </div>
            <div>{portfolio.title}</div>
            <div>{portfolio.description}</div>
          </div>
        )}
      </div>
    </>
  )
}
