"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

export async function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function get() {
      const res = await fetch("http://localhost:3001/api/blogs");
      const json = await res.json();
      setBlogs(json.data);
    }

    get();
  }, []);

  if (blogs.length === 0) {
    return <div>Loading Blogs...</div>
  }


  return (
    <>
      <div className="content-section-title">Blogs - UPDATED!!!!!</div>
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
    </>
  )
}
