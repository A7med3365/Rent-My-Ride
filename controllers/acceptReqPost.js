// acceptReqPost.js
const Booking = require("../models/Booking");

//this will be called when the owner clicks the accept button on the requestsIndex page
exports.acceptReqPost = async function (req, res) {
  const bookingId = req.query.bookingId;

  const booking = await Booking.findById(bookingId);

  booking.status = "accepted";

  await booking
    .save()
    .then(function (updatedBooking) {
      console.log("a booking has been updated: ", updatedBooking);
    })
    .catch(function (err) {
      console.log("an error occurred: ", err.message);
      res.send(err.message);
    });

  res.redirect("/user/requests");
};
