import { getBlogBySlug } from "@/utils";



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
