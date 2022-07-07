const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const geoSchema = new Schema({
  type: {
    type: String,
    default: "point",
  },
  coordinates:{
    type: [Number],
    index:"2dsphere"
  }
});

const NinjaSchema = new Schema({
  name: {
    type: String,
    required: [true, "name field is required"],
  },
  rank: {
    type: String,
  },
  available: {
    type: Boolean,
    default: false,
  },
  geometry: geoSchema
});
const Ninja = mongoose.model("Ninja", NinjaSchema);
const Ramy = 5;

module.exports = Ninja;
