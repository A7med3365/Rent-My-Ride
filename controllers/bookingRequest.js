//unavalible dates array contains objects with start and end dates, by defult it will contain
//the current date as a ending date and start from 2023-01-01
const unavailableDatesRanges = [
  {
    from: "2023-01-01",
    to: new Date().toISOString().slice(0, 10),
  },
];

const Bookings = require("../models/Booking");

exports.request_booking_get = async (req, res) => {
  const carId = req.query.carId;
  const ownerId = req.query.ownerId;

  const oldBookings = await Bookings.find({ car: carId, owner: ownerId });

  console.log(oldBookings);

  //go through each booking and add the dates to the unavailableDates array
  oldBookings.forEach((booking) => {
    const startDate = booking.startDate;
    const endDate = booking.endDate;
    unavailableDatesRanges.push({ from: startDate, to: endDate });
  });

  res.render("cars/bookingRequest", {
    unavailableDatesRanges: JSON.stringify(unavailableDatesRanges),
    carId,
    ownerId,
  });
};
