// rejectReqPost.js
const Booking = require("../models/Booking");

// this will be called when the owner clicks the reject button on the requestsIndex page
exports.rejectReqPost = async function (req, res) {
  const bookingId = req.query.bookingId;

  const booking = await Booking.findById(bookingId);

  booking.status = "rejected";

  //when rejected we need to clear the booking dates in the database
  // booking.startDate = "";
  // booking.endDate = "";

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
