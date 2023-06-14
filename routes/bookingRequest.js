const express = require('express');
const router = express.Router();
const requestToBookCtrl = require('../controllers/bookingRequest')

router.get('/cars/bookingRequest', requestToBookCtrl.request_booking_get);

module.exports = router;