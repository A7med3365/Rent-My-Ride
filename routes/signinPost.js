const express = require("express");

const signinPostCtrl = require("../controllers/signinPost");

const router = express.Router();

router.post("/user/signin", signinPostCtrl.signinPost);

module.exports = router;
