// profileEditGet.js
exports.profileEditGet = function (req, res) {
  const user = req.user;
  res.render("user/edit-profile", {
    title: "Profile Edit",
    user: user,
  });
};
