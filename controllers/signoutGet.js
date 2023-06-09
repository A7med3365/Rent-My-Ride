// signoutGet.js
exports.signoutGet = function (req, res) {
  req.logout(function (err) {
    if (err) {
      return next();
    }
    res.redirect("/user/signin");
  });
};
