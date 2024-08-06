const express=require('express')
const router = express.Router();

const authController = require('./auth.controller')
 router.get('/login',authController.RenderLoginPage)
 router.post('/login',authController.login)

module.exports= router ;
















// const express = require('express');
// // var router = express.Router();
// var router = express.Router()


// router.get('/login',(req ,res)=>{
//     res.render('login')
//     console.log("am from auth-login" )

// }) 
// module.exports = router;
 