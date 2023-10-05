
import blogs from "@/content/blogs.json";
import portfolios from "@/content/portfolios.json";
import Image from "next/image";


export default function Home() {

  return (
    <>
      <div>Hello World</div>
      <div> 
        <div>Blogs</div>
        <div>
          { blogs.map(blog =>
            <div key={blog.id}>
              <Image 
                src={blog.coverImage} 
                width={100} 
                height={100} 
                alt={blog.title} 
              />
              <div>{blog.title}</div>
              <div>{blog.description}</div>
            </div>
          )}
        </div>
        <div>Portfolios</div>
        <div>
          { portfolios.map(portfolio =>
            <div key={portfolio.id}>
              <Image 
                src={portfolio.coverImage} 
                width={100} 
                height={100} 
                alt={portfolio.title} 
              />
              <div>{portfolio.title}</div>
              <div>{portfolio.description}</div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
