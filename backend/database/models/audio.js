var mongoose = require("mongoose")
var Schema = mongoose.Schema

var Audio = mongoose.model("audios", new Schema ({
  author: mongoose.Schema.Types.ObjectId,
  name: String,
  text: String,
  timedate: Date,
  audiopath: String
}), "audios")

module.exports = Audio