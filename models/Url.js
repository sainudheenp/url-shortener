const mongoose = require("mongoose")

const UrlsSchema =new  mongoose.Schema({
full:{
    type:String,
    required:true
},
short:{
    type:String,
    required:true
},
Count:{
    type:Number,
    required:true ,

}


})