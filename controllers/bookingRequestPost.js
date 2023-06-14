// bookingRequestPost.js
const Booking = require("../models/Booking");

exports.bookingRequestPost = async function (req, res) {
  const dateRange = req.body["date-range"].split(" to ");
  const booking = await new Booking({
    car: req.body.car,
    owner: req.body.owner,
    renter: req.user._id,
    startDate: dateRange[0],
    endDate: dateRange[1],
  });
  await booking
    .save()
    .then(function (newBooking) {
      console.log("a new booking has been saved: ", newBooking);
    })
    .catch(function (err) {
      console.log(`an error occurred: ${err.message}`);
    });

  res.redirect("/user/history");
};
