// historyGet.js
const Booking = require("../models/Booking");

exports.historyGet = async function (req, res) {
  userBookings = await Booking.find({ renter: req.user._id })
    .populate("car")
    .populate("owner");

  res.render("user/history", { userBookings });
};
