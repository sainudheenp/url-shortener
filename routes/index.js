var express =require ('express');
var router = express.Router()
const mongoose=require('mongoose');
const ShortUrl = require('../models/ShortUrl')
 
 
router.get("/",function (req,res,next){
  res.render('index',{tite:"zain"})
})


router.get("/fetch-urls",async(req,res)=>{
  try {
    const urls= await ShortUrl.find({})
    res.json(urls);
  } catch (error) {
    console.log("error in fetch ",error)
  }


})










module.exports=router;

 



// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;
