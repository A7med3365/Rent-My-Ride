const express = require("express");

const calTestGetCtrl = require("../controllers/calTestGet");

const router = express.Router();

router.get('/test/cal', calTestGetCtrl.calTestGet);

module.exports = router;
