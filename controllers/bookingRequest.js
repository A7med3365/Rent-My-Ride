const unavailableDates = ["2023-06-15", "2023-06-16", "2023-06-17"];

exports.request_booking_get = (req, res) => {
  const carId = req.query.carId;
  const ownerId = req.query.ownerId;
  res.render("cars/bookingRequest", { unavailableDates, carId, ownerId });
};
