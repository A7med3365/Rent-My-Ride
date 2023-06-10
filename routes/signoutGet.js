const express = require("express");

const signoutGetCtrl = require("../controllers/signoutGet");
const isLoggedin = require("../config/Auth/ensureAthenticated");
const router = express.Router();

router.get(
  "/user/signout",
  isLoggedin.ensureAthenticated,
  signoutGetCtrl.signoutGet
);

module.exports = router;
