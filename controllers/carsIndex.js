const Car = require('../models/Car');


exports.index_detail_get = async (req, res) => {
    try {
        const cars = await Car.find();
        console.log("Car", cars);
        res.render('cars/index', { cars });
    } catch (error) {
        console.log(error.message);
        res.send("Something doesn't seem right");
    }
}