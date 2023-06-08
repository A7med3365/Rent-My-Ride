const express = require("express");

const signupPostCtrl = require("../controllers/signupPost");

const router = express.Router();

router.post('/user/signup', signupPostCtrl.signupPost);

module.exports = router;
