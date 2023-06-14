const Car = require('../models/Car');

exports.car_post_delete = async (req, res) => {
    console.log(req.query.id)

    try {
        await Car.findByIdAndDelete(req.query.id)
        return res.redirect('/cars/ownCarIndex');

    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
}