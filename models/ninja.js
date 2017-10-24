const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
  }
  //add in geo location
});
//Model from a Schema
const Ninja = mongoose.model("ninja", NinjaSchema);

module.exports = Ninja;
