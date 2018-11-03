const Schema = require("mongoose").Schema;
const mongoose = require("mongoose");
const PhotoSchema = new Schema({
  url: { type: String },
  caption: { type: String },
  copyrightHolder: { type: String },
  copyrightYear: { type: Date },
  dateTaken: { type: Date },
  nsfw: { type: Boolean },
  keywords: { type: [String] }
});

const PhotoModel = mongoose.model("Photo", PhotoSchema);
module.exports = PhotoModel;
