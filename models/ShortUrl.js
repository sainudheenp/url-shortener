// const mongoose = require("mongoose");
// // import {nanoid}  from "nanoid";
// const nanoid = getNanoid();
// const UrlsSchema = new mongoose.Schema({
//   full: {
//     type: String,
//     required: true,
//   },
//   short: {
//     type: String,
//     required: true,
//     default:()=> nanoid(5),
//   },
//   Clicks: {
//     type: Number,
//     required: true,
//     default: 0,
//   },
// });

// // module.exports =mongoose.model('Url',UrlsSchema)
// const ShortUrl = mongoose.model("ShortUrl", UrlsSchema);

// module.exports = ShortUrl;


const mongoose = require("mongoose");

const getNanoid = async () => {
  const { nanoid } = await import("nanoid");
  return nanoid;
};

const UrlsSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
    default: async () => {
      const nanoid = await getNanoid();
      return nanoid(10); // Generate a 10-character ID
    },
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
});

const ShortUrl = mongoose.model("ShortUrl", UrlsSchema);

module.exports = ShortUrl;

