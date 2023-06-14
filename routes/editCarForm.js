const express = require("express");

const editCarFormCtrl = require("../controllers/editCarForm");

const router = express.Router();

router.get('/cars/editCarForm', editCarFormCtrl.editCarForm);

module.exports = router;
