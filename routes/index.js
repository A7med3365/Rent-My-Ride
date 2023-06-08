const express = require("express");

const indexCtrl = require("../controllers/index");

const router = express.Router();

router.get('/', indexCtrl.index);

module.exports = router;
