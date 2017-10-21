const express = require("express");
const router = express.Router();

// get the list of ninjas from the database
router.get("/ninjas", function(req, res) {
  res.send({ type: "GET" });
});

//add a new ninja to the database
router.post("/ninjas", function(req, res) {
  res.send({ type: "POST" });
});

//update a ninja in the database
router.put("/ninjas/:id", function(req, res) {
  res.send({ type: "PUT" });
});
//delete a ninja from the database
router.delete("/ninjas/:id", function(req, res) {
  res.send({ type: "DELETE" });
});

module.exports = router;
