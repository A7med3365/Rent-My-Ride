const express = require("express");

const viewTestCtrl = require("../controllers/viewTest");

const router = express.Router();

router.get('/test', viewTestCtrl.viewTest);

module.exports = router;
