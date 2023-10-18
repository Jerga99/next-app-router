
const fs = require("fs");
const path = require("path");

const NUM_COUNT = 40;

function randomize() {
  const filePath = path.join(__dirname, "content", "blogs.json");
  const content = fs.readFileSync(filePath, "utf-8");
  const blogs = JSON.parse(content);

  blogs.forEach(blog => {
    const randomId = Math.floor(Math.random() * NUM_COUNT);
    blog.id = randomId;
    blog.slug = `Some-Blog-${randomId}`;
    blog.title = `Some Blog ${randomId}`;
  });

  fs.writeFileSync(filePath, JSON.stringify(blogs, null, 2));
}

setInterval(randomize, 3000);
