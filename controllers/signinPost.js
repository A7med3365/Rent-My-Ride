// signinPost.js
const passport = require("../Auth/passportConfig");

exports.signinPost = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/auth/signin",
});
