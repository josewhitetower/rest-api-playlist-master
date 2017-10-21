const express = require("express");

// set up express app
const app = express();
// handling get requests
app.get("/api", function(req, res) {
  console.log("GET request");
  // res.end();
  res.send({ name: "Yoshi" });
});

//listen for requests
app.listen(process.env.port || 4000, function() {
  console.log("now listening for requests");
});
