const express = require("express");

const bookingRequestPostCtrl = require("../controllers/bookingRequestPost");

const router = express.Router();

router.post('/cars/bookingRequest', bookingRequestPostCtrl.bookingRequestPost);

module.exports = router;
