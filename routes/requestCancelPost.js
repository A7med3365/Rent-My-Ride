const express = require("express");

const requestCancelPostCtrl = require("../controllers/requestCancelPost");

const router = express.Router();

router.get('/request/cancel', requestCancelPostCtrl.requestCancelPost);

module.exports = router;
