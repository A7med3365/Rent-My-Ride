// adminDelCar.js
const Car = require("../models/Car");

//this will be called when the admin clicks the delete button from the dashboard
exports.adminDelCar = function (req, res) {
  try {
    Car.findByIdAndDelete(req.query.id)
      .then(function (deletedCar) {
        console.log("a car has been deleted: ", deletedCar);
      })
      .catch(function (err) {
        console.log("an error occurred: ", err.message);
        res.send(err.message);
      });
    return res.redirect("/admin/carsIndex");
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
};
