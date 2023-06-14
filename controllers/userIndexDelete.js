const User = require('../models/User');

exports.user_delete = async (req, res) => {
    console.log(req.query.id);
    try {
        await User.findByIdAndDelete(req.query.id)
        return res.redirect('/admin/userIndex');
    } catch (error) {
        console.log(error.message)
        res.send('error.message');
    }
}