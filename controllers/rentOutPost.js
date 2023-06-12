const Car = require('../models/Car');

exports.rentOut_create_post = async (req, res) => {
    try {
        console.log(req.body);

        const newPost = new Car(req.body);
    
        await newPost.save()
        .then(() => {
            console.log('Your post has been saved.');
            res.redirect('/cars/index');
        })
    } catch (error) {
    console.log(error.message);
    }
}