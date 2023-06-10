const express = require("express");

const profileEditPostCtrl = require("../controllers/profileEditPost");
const isLoggedin = require("../config/Auth/ensureAthenticated");
const router = express.Router();

router.post(
  "/user/edit-profile",
  isLoggedin.ensureAthenticated,
  profileEditPostCtrl.profileEditPost
);

module.exports = router;
