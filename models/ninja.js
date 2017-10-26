const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create GeoLocation Schema
const GeoSchema = new Schema({
  type: {
    type: String,
    default: "Point"
  },
  coordinates: {
    type: [Number],
    index: "2dsphere"
  }
});

//create a ninja Schema and Model
const NinjaSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name field is required"]
  },
  rank: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  },
  geometry: GeoSchema
  //add in geo location
});
//Model from a Schema
const Ninja = mongoose.model("ninja", NinjaSchema);

module.exports = Ninja;
