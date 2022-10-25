const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const courses = require("./data/courses.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("passage to learning server is running");
});

// sending all the courses info
app.get("/courses", (req, res) => {
  res.send(courses);
});

// sending individual course info separately

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const course = courses.find((c) => c._id == id);
  res.send(course);
});

app.listen(port, () => {
  console.log(`passage to learning server is running on port : ${port}`);
});
