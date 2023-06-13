const express = require("express");

const calTestPostCtrl = require("../controllers/calTestPost");

const router = express.Router();

router.post('/test/cal', calTestPostCtrl.calTestPost);

module.exports = router;
