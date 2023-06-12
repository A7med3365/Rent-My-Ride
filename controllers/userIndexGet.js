// userIndexGet.js
const User = require("../models/User");

exports.userIndexGet = async function (req, res) {
  const users = await User.find({});
  res.render("admin/userIndex", { users: users });
};
