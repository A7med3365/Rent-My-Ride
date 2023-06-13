const express = require("express");
const router = express.Router();
const requestToBookCtrl = require("../controllers/bookingRequest");
const isLoggedin = require("../config/Auth/ensureAthenticated");

router.get(
  "/cars/bookingRequest",
  isLoggedin.ensureAthenticated,
  requestToBookCtrl.request_booking_get
);

module.exports = router;
