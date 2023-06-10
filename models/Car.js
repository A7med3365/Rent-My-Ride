const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    carImages: [{
        required: true,
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
    carOwner:{
        type: String,
        ref: "User",
        required: true
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
    }

});

