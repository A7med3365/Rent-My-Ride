// bookingRequestPost.js
exports.bookingRequestPost = function (req, res) {
  res.send(req.body);
  const dateRange = req.body["date-range"].split(" to ");
  res.send(dateRange);
};
