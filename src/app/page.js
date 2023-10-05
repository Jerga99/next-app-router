
import blogs from "@/content/blogs.json";
import portfolios from "@/content/portfolios.json";

export default function Home() {

  return (
    <>
      <div>Hello World</div>
      <div>
        {JSON.stringify(blogs)}
        {JSON.stringify(portfolios)}
      </div>
    </>
  )
}
