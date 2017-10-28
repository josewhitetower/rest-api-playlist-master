const express = require("express");
const router = express.Router();
const Ninja = require("../models/ninja");

// get a list of ninjas from the db
router.get("/ninjas", function(req, res, next) {
  /* Ninja.find({}).then(function(ninjas){
        res.send(ninjas);
    }); */
  Ninja.geoNear(
    {
      type: "Point",
      coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]
    },
    { maxDistance: 100000, spherical: true }
  )
    .then(function(ninjas) {
      res.send(ninjas);
    })
    .catch(next);
});

//add a new ninja to the database
router.post("/ninjas", (req, res, next) => {
  Ninja.create(req.body)
    .then(ninja => {
      res.send(ninja);
    })
    .catch(next);
});
// var ninja = new Ninja(req.body);
// ninja.save();

//update a ninja in the database
router.put("/ninjas/:id", function(req, res, next) {
  Ninja.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
    Ninja.findOne({ _id: req.params.id }).then(ninja => {
      res.send(ninja);
    });
  });
});
//delete a ninja from the database
router.delete("/ninjas/:id", function(req, res, next) {
  Ninja.findByIdAndRemove({ _id: req.params.id }).then(ninja => {
    res.send(ninja);
  });
});

module.exports = router;
