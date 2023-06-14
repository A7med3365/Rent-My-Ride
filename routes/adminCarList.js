const express = require("express");

const adminCarListCtrl = require("../controllers/adminCarList");

const router = express.Router();

router.get('/admin/carsIndex', adminCarListCtrl.adminCarList);

module.exports = router;
