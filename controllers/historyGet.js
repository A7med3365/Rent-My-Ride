// historyGet.js
const Booking = require("../models/Booking");

exports.historyGet = async function (req, res) {
  userBookings = await Booking.find({ renter: req.user._id })
    .populate("car")
    .populate("owner");

  console.log(userBookings);
  res.render("user/history", { userBookings });
};
