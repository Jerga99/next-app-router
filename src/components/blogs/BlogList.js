import { getBlogs } from "@/utils";
import Image from "next/image";
import Link from "next/link";

export function BlogList() {
  const blogs = getBlogs();

  return (
    <>
      <div className="content-section-title">Blogs - UPDATED!!!!!</div>
      <div className="content-list">
        { blogs.map(blog =>
          <div className="content-item" key={blog.slug}>
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
              <Link href={`/blogs/${blog.slug}`}>See More</Link>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
