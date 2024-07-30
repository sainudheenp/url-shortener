var express =require("express")
var router=express.Router();
const ShortUrl= require("./models/Url")


router.post("/srt-url", async(req,res)=>{
   await ShortUrl.create({full:req.body.FullUrl})
   res.send(
    console.log("Posted")
   )
})