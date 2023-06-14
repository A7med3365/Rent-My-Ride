// userCarPostsGet.js
const Car = require("../models/Car");

exports.userCarPostsGet = async function (req, res) {
  try {
  const userId = req.user._id;
  const cars = await Car.find({
    carOwner: userId,
  });
  console.log(cars);
  res.render("cars/ownCarsIndex", { cars });
  
} catch (error) {
  console.log(error.message);
  res.send(error.message);
}
};
