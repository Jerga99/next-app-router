

import portfolios from "@/content/portfolios.json";
import blogs from "@/content/blogs.json";

export async function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  })
}

export function getBlogs() {
  return blogs;
}

export function getPortfolios() {
  return portfolios;
}
