const express = require("express");

const aboutCtrl = require("../controllers/aboutIndex");

const router = express.Router();

router.get('/about', aboutCtrl.aboutIndex);

module.exports = router;