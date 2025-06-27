const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.post("/user/signup", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});
app.post("/user/signin", function (req, res) {
  res.json({
    message: "signin endpoint",
  });
});
app.post("/user/courses", function (req, res) {
  res.json({
    message: "user courses endpoint",
  });
});
app.post("/user/purchases", function (req, res) {
  res.json({
    message: "user courses endpoint",
  });
});
app.post("/courses", function (req, res) {
  res.json({
    message: "courses endpoint",
  });
});

app.listen(PORT, () => {
  console.log(`Server is live on http://localhost:${PORT}`)
});
