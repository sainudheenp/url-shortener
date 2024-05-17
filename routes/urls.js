const express = require('express');
const { nanoid } = require('nanoid');
const Url = require('../models/Url.js');
const { validateUrl }  = require('../utils/utils.js');
require('dotenv').config();


const router = express.router();

router.post('/short', async (req, res) => {
    const { origUrl } = req.body;
    const base = process.env.BASE;


    const urlId = nanoid();

    if (validateUrl(origUrl)) {
        try {

            let url = await Url.findOne({ origUrl });
            if (url) {
                res.json(url);
            }

            else {
                const shortUrl = `${base}/${urlId}`;

                url = new url({
                    origUrl,
                    shortUrl,
                    urlId,
                    date: new Date(),
                })
                await url.save();
                res.json(url);



            }


        } catch (err) {
            console.log(err);
            res.status(500).json('Server Error');
          }
        } else {
          res.status(400).json('Invalid Original Url');
        }
      });
      

module.exports = router;