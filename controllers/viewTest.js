// viewTest.js
exports.viewTest = function (req, res) {
  res.render("auth/signup");
};

exports.loginTest = function (req, res) {
  res.render("auth/signin");
};