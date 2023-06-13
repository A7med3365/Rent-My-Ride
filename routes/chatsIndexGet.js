const express = require("express");

const chatsIndexGetCtrl = require("../controllers/chatsIndexGet");
const isLoggedin = require("../config/Auth/ensureAthenticated");
const router = express.Router();

router.get(
  "/user/chats",
  isLoggedin.ensureAthenticated,
  chatsIndexGetCtrl.chatsIndexGet
);

module.exports = router;
