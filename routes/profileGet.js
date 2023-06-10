const express = require("express");

const profileGetCtrl = require("../controllers/profileGet");
const isLoggedin = require("../config/Auth/ensureAthenticated");
const router = express.Router();

router.get(
  "/user/profile",
  isLoggedin.ensureAthenticated,
  profileGetCtrl.profileGet
);

module.exports = router;
