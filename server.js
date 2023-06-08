const mongoose = require("mongoose");
const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();

app.use(expressLayouts);
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

//<--import routers-->>
const viewTestRouter = require("./routes/viewTest");

//<--mount routes-->>
app.use("/", viewTestRouter);
const indexRouter = require("./routes/index");

const port = 4001;

app.use('/', indexRouter);
app.listen(port, function () {
  console.log("Server running on port 4001");
});
mongoose
  .connect("mongodb://127.0.0.1:27017/rentDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(function () {
    console.log("mongoDB connected");
  })
  .catch(function (err) {
    console.log("mongoDB error: " + err.message);
  });
