// profileGet.js
exports.profileGet = function (req, res) {
  res.render("user/profile", { title: "Profile" });
};
