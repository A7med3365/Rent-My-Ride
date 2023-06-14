// requestCancelPost.js
const Booking = require("../models/Booking");

exports.requestCancelPost = async function (req, res) {
  const bookingId = req.query.bookingId;
  await Booking.findByIdAndDelete(bookingId)
    .then(function () {
      console.log("Booking deleted");
    })
    .catch(function (error) {
      console.log(error);
      res.send(error);
    });
  res.redirect("/user/history");
};
