var createError = require("http-errors");
var express = require("express");
var path = require("path");
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
require("dotenv").config();

// DB Connection
const ConnectDB = require("./config/db");
ConnectDB();

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var UrslsRouter = require("./routes/urls");

var app = express();
app.listen(process.env.PORT || 3001, () => {
  console.log("server Running on ", process.env.PORT);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/dood", (req, res) => {
  console.log("am from dood");
});
PORT = process.env.PORT;
console.log("port log: ", PORT);

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/url", UrslsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
