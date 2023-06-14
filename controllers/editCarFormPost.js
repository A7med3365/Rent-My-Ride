// editCarFormPost.js
const Car = require("../models/Car");

exports.editCarFormPost = async function (req, res) {
  try {
    console.log(req.query.id);
    console.log(req.body);

    await Car.findByIdAndUpdate(req.query.id, req.body)
      .then((updatedCar) => {
        console.log("Your post has been updated.", updatedCar);
      })
      .catch((error) => {
        console.log(error);
      });
    res.redirect("/user/posts");
  } catch (error) {
    console.log(error.message);
  }
};
