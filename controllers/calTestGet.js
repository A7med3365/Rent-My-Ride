// calTestGet.js
const unavailableDates = ["2023-06-15", "2023-06-16", "2023-06-17"];
exports.calTestGet = function (req, res) {
  res.render("test/cal", { unavailableDates });
};
