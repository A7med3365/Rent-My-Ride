// signupPost.js
const bcrypt = require("bcrypt");
const User = require("../models/User");

exports.signupPost = async function (req, res) {
  try {
    const user = new User(req.body);

    const hash = bcrypt.hashSync(req.body.password, 10);
    user.password = hash;
    await user
      .save()
      .then(async function (newUser) {
        console.log(
          newUser.createdAt.toString().split(" ").slice(1, 4).join(" ")
        );
        newUser.joined = newUser.createdAt
          .toString()
          .split(" ")
          .slice(1, 4)
          .join(" ");
        await newUser.save();
        console.log("a new user has been saved");
      })
      .catch(function (err) {
        console.log(`an error occurred: ${err.message}`);
      });
    res.render("home/index"); // we will change this to something else
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};
