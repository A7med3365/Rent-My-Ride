const express = require("express");

const viewProfileGetCtrl = require("../controllers/viewProfileGet");

const router = express.Router();

router.get('/profile/view', viewProfileGetCtrl.viewProfileGet);

module.exports = router;
