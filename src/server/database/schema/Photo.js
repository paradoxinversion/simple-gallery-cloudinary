const Schema = require("mongoose").Schema;
const mongoose = require("mongoose");
const PhotoSchema = new Schema({
  url: { type: String },
  caption: { type: String },
  copyrightHolder: { type: String },
  copyrightYear: { type: Date },
  dateTaken: { type: Date },
  nsfw: { type: Boolean },
  tags: { type: [String] },
  title: { type: String },
  dateUploaded: { type: Date },
  width: { type: Number },
  height: { type: Number },
  format: { type: String },
  bytes: { type: Number }
});

const PhotoModel = mongoose.model("Photo", PhotoSchema);
module.exports = PhotoModel;
