const express = require("express");

const adminDelCarCtrl = require("../controllers/adminDelCar");

const router = express.Router();

router.get('/admin/car/del', adminDelCarCtrl.adminDelCar);

module.exports = router;
