const mongoose = require("mongoose");
require('dotenv').config()

const ConnectDB =async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{ });
        console.log("DB connected successfully")
    } catch (error) {
        console.error("error  : ", error);
       throw error ;
        
    }
}
module.exports = ConnectDB;
