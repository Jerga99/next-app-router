

import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

const blogsDir = path.join(process.cwd(), "src", "content", "blogs");
const portfoliosDir = path.join(process.cwd(), "src", "content", "portfolios");

export async function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  })
}

function getPortfolioNames() {
  const names = fs.readdirSync(portfoliosDir);
  return names;
}

function getBlogNames() {
  const names = fs.readdirSync(blogsDir);
  return names;
}

export function getBlogs() {
  const blogNames = getBlogNames();

  const blogs = blogNames.map(name => {
    const filePath = path.join(blogsDir, name);
    const fileContent = fs.readFileSync(filePath, "utf8");

    const { data, content} = matter(fileContent);
    data.slug = name.replace(/\.md$/, "");

    return {...data, content};
  });

  return blogs;
}

export function getPortfolios() {
  const portfolioNames = getPortfolioNames();
  
  const portfolios = portfolioNames.map(name => {
    const filePath = path.join(portfoliosDir, name);
    const fileContent = fs.readFileSync(filePath, "utf8");
    
    const { data, content} = matter(fileContent);
    data.slug = name.replace(/\.md$/, "");
    return {...data, content}
  })

  return portfolios;
}

async function markdownToHtml(content) {
  const result = await remark()
    .use(remarkHtml)
    .use(remarkGfm)
    .process(content);

  return result.toString();
}

export async function getBlogBySlug(slug) {
  const fileName = slug + ".md";
  const filePath = path.join(blogsDir, fileName);
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data, content} = matter(fileContent);
  data.slug = slug;

  const htmlContent = await markdownToHtml(content);
  return {...data, content: htmlContent};
}

export async function getPortfolioBySlug(slug) {
  const fileName = slug + ".md";
  const filePath = path.join(portfoliosDir, fileName);
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data, content} = matter(fileContent);
  data.slug = slug;
  const htmlContent = await markdownToHtml(content);
  return {...data, content: htmlContent};
}

export function getContentCount() {
  return {
    blogs: getBlogNames().length,
    portfolios: getPortfolioNames().length,
  }
}
