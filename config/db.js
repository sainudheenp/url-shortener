const mongoose = require("mongoose");
require('dotenv').config()

const ConnectDB =async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
        });
        console.log("DB connected successfully")
    } catch (error) {
        console.error("error maan :   ",error);
        process.exit(1);
        
    }
}
module.exports = ConnectDB;