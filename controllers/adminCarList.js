// adminCarList.js
const Car = require("../models/Car");

exports.adminCarList = async function (req, res) {
  const cars = await Car.find();
  res.render("admin/carsIndex");
};
