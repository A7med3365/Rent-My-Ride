// this middleware will check if the user has admin privileges
exports.ensureAdmin = function (req, res, next) {
  if (req.user.userType == "admin") {
    console.log(req.user);
    next();
  } else {
    res.redirect("/");
  }
};
