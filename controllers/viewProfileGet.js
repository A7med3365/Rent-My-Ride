// viewProfileGet.js
const User = require("../models/User");

exports.viewProfileGet = async function (req, res) {
  const userId = req.query.user;
  const user = await User.findById(userId);
  res.render("user/viewProfile", { user: user });
};
