const express = require("express");

const userIndexGetCtrl = require("../controllers/userIndexGet");

const router = express.Router();

router.get('/admin/userIndex', userIndexGetCtrl.userIndexGet);

module.exports = router;
