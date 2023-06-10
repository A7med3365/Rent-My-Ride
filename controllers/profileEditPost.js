// profileEditPost.js
const User = require("../models/User");
exports.profileEditPost = async function (req, res) {
  try {
    await User.findByIdAndUpdate(req.body.id, req.body);
    res.redirect("/user/profile");
  } catch (error) {
    console.log(error.message);
  }
};
