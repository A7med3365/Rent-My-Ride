const express = require("express");

const historyGetCtrl = require("../controllers/historyGet");
const isLoggedin = require("../config/Auth/ensureAthenticated");
const router = express.Router();

router.get(
  "/user/history",
  isLoggedin.ensureAthenticated,
  historyGetCtrl.historyGet
);

module.exports = router;
