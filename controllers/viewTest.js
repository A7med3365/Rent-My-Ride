// viewTest.js
const Car = require('../models/Car');

exports.viewTest = async function (req, res) {
  const cars = await Car.find();
  console.log("Car", cars);
  res.render('cars/index', { cars });
};

exports.loginTest = function (req, res) {
  res.render("auth/signin");
};

exports.profileTest = function (req, res) {
  res.render("user/profile");
};

exports.editProfileTest = function (req, res) {
  res.render("user/edit-profile");
};
exports.carsTest = function (req, res) {
  res.render("cars/index");
};
