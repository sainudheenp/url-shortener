const express = require("express");
const app = express();
// import connectDB from "./config/db";
const connectDB = require("./config/db");

const dotenv = require('dotenv');
dotenv.config({ path: '../config/.env' });


const indexRouter = require('./routes/index.js');
const urlsRouter = ('./routes/urls.js');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);
app.use('/api', urlsRouter);
connectDB();
const port =3333;


app.listen(port ,()=>{
    console.log(`Server is running at PORT ${port}`)
})