const express = require("express");

const chatClientTestGetCtrl = require("../controllers/chatClientTestGet");
const isLoggedin = require("../config/Auth/ensureAthenticated");
const router = express.Router();

router.get(
  "/test/chat",
  isLoggedin.ensureAthenticated,
  chatClientTestGetCtrl.chatClientTestGet
);

module.exports = router;
