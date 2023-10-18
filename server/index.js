
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3001;

const pathToContent = path.join(__dirname, "content");

app.get("/", (req, res) => {
  res.json({data: "Hello Node JS Server!"});
});

app.get("/api/blogs", (req, res) => {
  const blogsPath = path.join(pathToContent , "blogs.json");
  const blogs = fs.readFileSync(blogsPath, "utf-8");
  res.json({data: JSON.parse(blogs)});
});

app.get("/api/portfolios", (req, res) => {
  const portfolioPath = path.join(pathToContent , "portfolios.json");
  const portfolios = fs.readFileSync(portfolioPath, "utf-8");
  res.json({data: JSON.parse(portfolios)});
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

