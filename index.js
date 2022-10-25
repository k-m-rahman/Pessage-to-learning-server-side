const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const courses = require("./data/courses.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("passage to learning server is running");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.listen(port, () => {
  console.log(`passage to learning server is running on port : ${port}`);
});
