const express = require("express");

const profileEditGetCtrl = require("../controllers/profileEditGet");

const router = express.Router();

router.get("/user/edit-profile", profileEditGetCtrl.profileEditGet);

module.exports = router;
