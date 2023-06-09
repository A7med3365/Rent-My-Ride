// signinPost.js
const passport = require("../config/Auth/passportConfig");

exports.signinPost = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/user/signin",
});
