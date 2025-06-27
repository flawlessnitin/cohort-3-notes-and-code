const express = require("express");
const app = express();
let requestCount = 5;

// app.use(express.json())
// function request Increaser(req, res, next) {
//   requestCount = requestCount + 1;
//   console.log(`Total number of requests = ${requestCount}`);
//  if() {
//    res.json({
//     message: "I ended the request early",
//   });
//  }
//   next();
// }
// function reqSumHandler(req, res) {
//   console.log("Control reached the real handler");
//   // main logic
//   const a = parseInt(req.query.a);
//   const b = parseInt(req.query.b);
//   console.log(req.name);
//   res.json({
//     ans: a + b,
//   });
// }

// app.use(requestIncreaser) // Middleware applied to all routes after it

app.post("/sum", function (req, res) {
  console.log(req.body);
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);
});
// app.get("/multiply", reqSumHandler)
app.listen(3000);
