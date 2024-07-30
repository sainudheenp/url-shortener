const mongoose = require("mongoose");
const shortId = require("shortid");

const UrlsSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
    default: shortId.generate,
  },
  Clicks: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports =mongoose.model('Url',UrlsSchema)