// requestsIndexGet.js
const Booking = require("../models/Booking");

exports.requestsIndexGet = async function (req, res) {
  userRequests = await Booking.find({ owner: req.user._id })
    .populate("car")
    .populate("renter");

  res.render("user/requestsIndex", { userRequests });
};
