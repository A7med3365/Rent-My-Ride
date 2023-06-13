// carDetail.js

const Car = require("../models/Car");

exports.car_detail_get = async (req, res) => {
  try {
    const car = await Car.findById(req.query.id)
      .populate("carImages")
      .populate("carOwner");
    console.log("car");
    res.render("cars/carDetail", { car });
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
};

exports.car_detail_post = async (req, res) => {
  try {
    const car = await Car.findById(req.query.id);
    res.render("cars/carDetail", { car });
  } catch (error) {
    console.log(error.message);
  }
};
