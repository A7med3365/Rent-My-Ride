const express = require("express");

const signoutGetCtrl = require("../controllers/signoutGet");

const router = express.Router();

router.get('/user/signout', signoutGetCtrl.signoutGet);

module.exports = router;
