const express = require('express');
const router = express.Router();
const carDetailCtrl = require('../controllers/carDetail');

router.get('/cars/carDetail', carDetailCtrl.car_detail_get);
router.post('/cars/carDetail', carDetailCtrl.car_detail_post)

module.exports = router;