const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    carImages: [{
        type: mongoose.Schema.Types.ObjectId,
        // required: true,
        ref: "File"
    }],
    carMake: {
        type: String,
        required: true
    },
    carModel: {
        type: String,
        required: true        
    },
    carYear: {
        type: Number,
        required: true
    },
    carType: {
        type: String,
        required: true
    },
    carOwner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        // required: true
    },
    fuelTankSize: {
        type: String,
        required: true
    },
    fuelType: {
        type: String,
        required: true
    },
    numberOfSeats: {
        type: Number,
        required: true
    },
    numberOfDoors: {
        type: Number,
        required: true
    },
    features: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    dailyPrice:{
        type: String,
        // required: true
    }

});

const Car = mongoose.model('Car', carSchema)

module.exports = Car;