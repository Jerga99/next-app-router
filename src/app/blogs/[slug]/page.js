import { getBlogBySlug, getBlogs } from "@/utils";

export function generateStaticParams() {
  const blogs = getBlogs();

  return blogs.map(blog =>({
    slug: blog.slug
  }));
}

export default function BlogDetail({params}) {

  const blog = getBlogBySlug(params.slug);

  return (
    <>
      <div>Blog Data: {blog.title}, {blog.description}</div>

      <hr />

      <div>{blog.content}</div>
    </>
  )
}
