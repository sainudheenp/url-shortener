const mongoose = require("mongoose")


const UrlSchema = new mongoose.Schema({
    urlId: {
        type: String,
        require: true,
    },
    origUrl: {
        type: String,
        require: true,

    },
    shortUrl: {
        type: String,
        require: true,

    },
    clicks: {
        type: Number,
        require: true,
        default: 0,

    },
    date: {
        type: String,
        default: Date.now,
    }



})

module.exports = mongoose.model('Url', UrlSchema);