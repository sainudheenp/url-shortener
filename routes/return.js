    var express= require('express')
    var router = express.Router()

    // router.get('/return/:short',(req,res)=>{
       
    //         console.log("Zainnuuu"), 
    //         console.log(request.params.short),
    //         res.send(`Short URL parameter received: ${req.params.short}`)
    // })

    router.get('/return/:short', (req, res) => {
        console.log(req.params.short);
        res.send(`Short URL parameter received: ${req.params.short}`);







    });




    module.exports=router;