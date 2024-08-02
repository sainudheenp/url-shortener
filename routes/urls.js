// POST

var express = require('express');
var router = express.Router();
const ShortUrl = require('../models/ShortUrl.js');

router.post('/srt-url', async (req, res,next ) => {
  console.log(req.body.FullUrl)
    try {
        const shortUrl = await ShortUrl.create({ full: req.body.FullUrl });
        // res.status(201).json(shortUrl)
        console.log('Posted')
        res.render('index')

    } catch (error) {
        console.error('Error creating short URL:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
