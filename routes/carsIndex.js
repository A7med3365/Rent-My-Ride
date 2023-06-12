const express = require('express');
const router = express.Router();
const carsIndexCtrl = require('../controllers/carsIndex');

router.get('/cars/index', carsIndexCtrl.index_detail_get);

module.exports = router;