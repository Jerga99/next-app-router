
import blogs from "@/content/blogs.json";
import portfolios from "@/content/portfolios.json";


export default function Home() {

  return (
    <>
      <div>Hello World</div>
      <div> 
        <div>Blogs</div>
        <div>
          { blogs.map(blog =>
            <div key={blog.id}>{blog.title}</div>
          )}
        </div>
        <div>Portfolios</div>
        <div>
          { portfolios.map(portfolio =>
            <div key={portfolio.id}>{portfolio.title}</div>
          )}
        </div>
      </div>
    </>
  )
}
