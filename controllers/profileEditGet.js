// profileEditGet.js
exports.profileEditGet = function (req, res) {
  res.render("user/edit-profile", {
    title: "Profile Edit",
  });
};
