    var express= require('express')
    var router = express.Router()
    const ShortUrl = require('../models/ShortUrl')



    router.get('/return/:short', async (req, res) => {
        console.log(req.params.short);
    


      const shorturl= await  ShortUrl.findOne({short:req.params.short})

      if (shorturl==null)return res.sendStatus(404);

    else shorturl.Clicks++ ,shorturl.save()
    res.redirect(shorturl.full)



    });




    module.exports=router;