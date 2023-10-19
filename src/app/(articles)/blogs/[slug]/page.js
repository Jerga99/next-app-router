import { ContentHeader } from "@/components/ContentHeader";
import { getBlogBySlug, getBlogs } from "@/utils";

export function generateStaticParams() {
  const blogs = getBlogs();

  return blogs.map(blog =>({
    slug: blog.slug
  }));
}

export default async function BlogDetail({params}) {

  const blog = await getBlogBySlug(params.slug);

  return (
    <div className="w-2/3 m-auto">
      <ContentHeader 
        title={blog.title}
        description={blog.description}
        coverImage={blog.coverImage}
        authorImage={blog.authorImage}
        date={blog.date}
        author={blog.author}
      />
      <div dangerouslySetInnerHTML={{__html: blog.content}}></div>
    </div>
  )
}
