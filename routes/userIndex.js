const express = require("express");

const userIndexCtrl = require("../controllers/userIndex");

const router = express.Router();

router.get('/user/list', userIndexCtrl.userIndex);

module.exports = router;
