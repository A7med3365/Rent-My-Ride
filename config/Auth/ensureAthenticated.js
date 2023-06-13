exports.ensureAthenticated = function (req, res, next) {
  if (req.isAuthenticated()) {
    console.log(req.user);
    next();
  } else {
    res.redirect("/user/signin");
  }
};
