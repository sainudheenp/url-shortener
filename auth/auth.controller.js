// const bcrypt=require('bcrypt');
// const jwt = require('jsonwebtoken');
const User = require('../models/User')

exports.RenderLoginPage =(req,res)=>{
    res.render('login')
}

exports.login = (req,res)=>{
    const {email,password}=req.body

    res.send(
        console.log(req.body),
        console.log("heyy",email,password)
    )
   
}