const mongoose = require("mongoose");
const { nanoid } = require("nanoid");

const UrlsSchema = new mongoose.Schema({
  full: { type: String, required: true },
  short: {
    type: String,
    required: true,
    unique: true,
    default: () => nanoid(4),
  },
  Clicks: { type: Number, required: true, default: 0 },
});

const ShortUrl = mongoose.model("ShortUrl", UrlsSchema);
module.exports = ShortUrl;