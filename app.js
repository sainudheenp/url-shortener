const express = require("express");
const app = express();
const connectDB = require("./config/db.js");

require('dotenv').config();


// const dotenv = require('dotenv');
// dotenv.config({ path: '../config/.env' });


const indexRouter = require('./routes/index.js');
const urlsRouter = require('./routes/urls.js');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', indexRouter);

app.use('/api', urlsRouter);
console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiih")

connectDB();
const port =process.env.PORT || 3000;


app.listen(port ,()=>{
    console.log(`Server is running at PORT ${port}`)
})