// signupPost.js
const bcrypt = require("bcrypt");
const User = require("../models/User");

const mailgun = require("mailgun-js");
const DOMAIN = "sandboxfabb88b598da4f0eb80cc28400d81345.mailgun.org";
const mg = mailgun({
  apiKey: "4f597e9f9a508aeb69584edabef5330d-af778b4b-d33b4e46",
  domain: DOMAIN,
});

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

        const data = {
          from: "Mailgun Sandbox <postmaster@sandboxfabb88b598da4f0eb80cc28400d81345.mailgun.org>",
          to: `${newUser.email}`,
          subject: `welcome ${newUser.firstName} ${newUser.lastName}`,
          template: "test",
          "h:X-Mailgun-Variables": { test: "test" },
          "v:name": `${newUser.firstName} ${newUser.lastName}`,
        };

        mg.messages().send(data, function (error, body) {
          console.log(body);
        });

        console.log("a new user has been saved");
      })
      .catch(function (err) {
        console.log(`an error occurred: ${err.message}`);
      });
    res.redirect("/user/signin"); // we will change this to something else
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};
