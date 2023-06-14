// editCarForm.js
const Car = require("../models/Car");

exports.editCarForm = async function (req, res) {
  const carId = req.query.id;
  const car = await Car.findById(carId);
  res.render("cars/editCarPost", { car: car });
};
