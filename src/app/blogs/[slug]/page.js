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
    <>
      <div>Blog Data: {blog.title}, {blog.description}</div>

      <hr />

      <div dangerouslySetInnerHTML={{__html: blog.content}}></div>
    </>
  )
}
