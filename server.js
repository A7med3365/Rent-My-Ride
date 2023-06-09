const mongoose = require("mongoose");
const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const session = require("express-session");
const passport = require("./config/Auth/passportConfig");

const multer = require("multer");
const storage = require("./config/file/uploadConfig");

// const upload = multer({ storage: storage });
const upload = multer({ dest: "public/uploads" });

const app = express();

app.use(
  session({
    secret: "thisisasecret",
    saveUninitialized: true,
    resave: false,
    cookie: { maxAge: 60000 },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(expressLayouts);
app.set("view engine", "ejs");

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

//<--import routers-->>
const viewTestRouter = require("./routes/viewTest");
const indexRouter = require("./routes/index");
const signupGetRouter = require("./routes/signupGet");
const signupPostRouter = require("./routes/signupPost");
const signinGetRouter = require("./routes/signinGet");
const signinPostRouter = require("./routes/signinPost");
const fileUploadGetRouter = require("./routes/fileUploadGet");
const userIndexRouter = require("./routes/userIndex");
const fileUploadPostRouter = require("./routes/fileUploadPost");

//<--mount routes-->>
app.use("/", viewTestRouter);
app.use("/", signupPostRouter);
app.use("/", signupGetRouter);
app.use("/", indexRouter);
app.use("/", signinGetRouter);
app.use("/", signinPostRouter);
app.use("/", fileUploadPostRouter);
app.use('/', userIndexRouter);
app.use("/", fileUploadGetRouter);

const port = 4001;

app.listen(port, function () {
  console.log("Server running on port 4001");
});
mongoose
  .connect("mongodb+srv://Admin:34146466@carsurf.hxivufu.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(function () {
    console.log("mongoDB connected");
  })
  .catch(function (err) {
    console.log("mongoDB error: " + err.message);
  });
