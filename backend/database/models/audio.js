var mongoose = require("mongoose")
var Schema = mongoose.Schema

var Audio = mongoose.model("audios", new Schema ({
  author: String,
  name: String,
  timedate: Date,
  audiopath: String
}), "audios")

module.exports = Audio