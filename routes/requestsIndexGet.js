const express = require("express");

const requestsIndexGetCtrl = require("../controllers/requestsIndexGet");
const isLoggedin = require("../config/Auth/ensureAthenticated");
const router = express.Router();

router.get(
  "/user/requests",
  isLoggedin.ensureAthenticated,
  requestsIndexGetCtrl.requestsIndexGet
);

module.exports = router;
