const express = require("express");

const signupGetCtrl = require("../controllers/signupGet");

const router = express.Router();

router.get('/user/signup', signupGetCtrl.signupGet);

module.exports = router;
