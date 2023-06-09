const express = require("express");

const profileGetCtrl = require("../controllers/profileGet");

const router = express.Router();

router.get('/user/profile', profileGetCtrl.profileGet);

module.exports = router;
