const express = require("express");

const viewTestCtrl = require("../controllers/viewTest");

const router = express.Router();

router.get('/test', viewTestCtrl.viewTest);
router.get('/test-login', viewTestCtrl.loginTest);

module.exports = router;
