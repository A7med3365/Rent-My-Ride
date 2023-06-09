const express = require("express");

const signinGetCtrl = require("../controllers/signinGet");

const router = express.Router();

router.get("/user/signin", signinGetCtrl.signinGet);

module.exports = router;
