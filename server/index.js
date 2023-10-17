
const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.json({data: "Hello Node JS Server!"});
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})

