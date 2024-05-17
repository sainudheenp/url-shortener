const  mongoose  = require("mongoose")
const dotenv =  require("dotenv");
dotenv.config({ path: './.env' })


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("DB Connected")
    } catch (error) {
        console.log(error)
    }
}


module.exports = connectDB;