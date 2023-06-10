const express = require("express");

const profileEditGetCtrl = require("../controllers/profileEditGet");
const isLoggedin = require("../config/Auth/ensureAthenticated");
const router = express.Router();

router.get(
  "/user/edit-profile",
  isLoggedin.ensureAthenticated,
  profileEditGetCtrl.profileEditGet
);

module.exports = router;
