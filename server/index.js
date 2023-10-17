
const express = require("express");
const app = express();
const port = 3001;

const portfolios = require("./content/portfolios.json");
const blogs = require("./content/blogs.json");

app.get("/", (req, res) => {
  res.json({data: "Hello Node JS Server!"});
});

app.get("/api/blogs", (req, res) => {
  res.json({data: blogs});
});

app.get("/api/portfolios", (req, res) => {
  res.json({data: portfolios});
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

