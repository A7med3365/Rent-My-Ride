// viewTest.js
exports.viewTest = function (req, res) {
  res.render("cars/rentOutForm");
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
