

import path from "path";
import fs from "fs";

const blogsDir = path.join(process.cwd(), "src", "content", "blogs");
const portfoliosDir = path.join(process.cwd(), "src", "content", "portfolios");

export async function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  })
}

export function getBlogs() {
  const blogNames = fs.readdirSync(blogsDir);
  return blogNames;
}

export function getPortfolios() {
  const portfolioNames = fs.readdirSync(portfoliosDir);
  return portfolioNames;
}
