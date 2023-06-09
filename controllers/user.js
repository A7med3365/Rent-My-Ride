const User = require('../models/User')

exports.user_profile_get = async (req, res) => {
    try {
        const user = await User.findById(req.query.id)
        res.render('user/profile', {user: user})
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
}