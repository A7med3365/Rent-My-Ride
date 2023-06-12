const mongoose = require("mongoose");
const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const http = require("http");
const { Server } = require("socket.io");

const session = require("express-session");
const passport = require("./config/Auth/passportConfig");

const app = express();

const server = http.createServer(app); // create HTTP server
const io = new Server(server); // create Socket.IO server

module.exports = io;

app.use(
  session({
    secret: "thisisasecret",
    saveUninitialized: true,
    resave: false,
    cookie: { maxAge: 600000000 },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(expressLayouts);
app.set("view engine", "ejs");

app.use(express.static("public"));

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
const signoutGetRouter = require("./routes/signoutGet");
const adminDashboardGetRouter = require("./routes/adminDashboardGet");
const profileGetRouter = require("./routes/profileGet");
const profileEditGetRouter = require("./routes/profileEditGet");
const rentOutGetRoute = require("./routes/rentOutGet");
const chatClientTestGetRouter = require("./routes/chatClientTestGet");
const rentOutPostRoute = require("./routes/rentOutPost");
const profileEditPostRouter = require("./routes/profileEditPost");
const carDetailRoute = require("./routes/carDetail");

const chatsIndexGetRouter = require("./routes/chatsIndexGet");
const multiFileUploadGetRouter = require("./routes/multiFileUploadGet");
const multiFileUploadPostRouter = require("./routes/multiFileUploadPost");
const userIndexGetRouter = require("./routes/userIndexGet");
const viewProfileGetRouter = require("./routes/viewProfileGet");
const userCarPostsGetRouter = require("./routes/userCarPostsGet");

app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
});

//<--mount routes-->>
app.use("/", viewTestRouter);
app.use("/", signupPostRouter);
app.use("/", signupGetRouter);
app.use("/", indexRouter);
app.use("/", signinGetRouter);
app.use("/", signinPostRouter);
app.use("/", fileUploadPostRouter);
app.use("/", userIndexRouter);
app.use("/", fileUploadGetRouter);
app.use("/", profileEditPostRouter);
app.use("/", profileEditGetRouter);
app.use("/", profileGetRouter);
app.use("/", adminDashboardGetRouter);
app.use("/", signoutGetRouter);
app.use("/", rentOutGetRoute);
app.use("/", multiFileUploadPostRouter);
app.use("/", multiFileUploadGetRouter);
app.use("/", rentOutPostRoute);
app.use("/", carDetailRoute);
app.use("/", chatClientTestGetRouter);
app.use("/", viewProfileGetRouter);
app.use("/", userIndexGetRouter);
app.use("/", chatsIndexGetRouter);
app.use('/', userCarPostsGetRouter);

const onConn = require("./config/chat/onConn");

io.on("connection", onConn.onConnection);

const port = 4001;

server.listen(port, function () {
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
