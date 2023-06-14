const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.change_password_get = (req, res) => {
    res.render('user/changePassword');
}

exports.change_password_post = async (req, res) => {
    try {
        const currentUser = await User.findById(req.user._id)
        const password = req.body.password;
        // console.log(currentUser.verfiyPasswords(password));
        const newPassword = req.body.newPassword;
        console.log("New", req.body.newPassword)
        const confirmPassword = req.body.confirmPassword
        console.log("confirmPassword", req.body.confirmPassword)
        if ( (currentUser.verfiyPasswords(password)) && (newPassword === confirmPassword)) {
            console.log('changing password');
            const pass = newPassword.toString();
            const hash = bcrypt.hashSync(pass, 10)
            
            await User.findByIdAndUpdate(req.user._id,{ password: hash}).then((updatedUser => {
                console.log('a user has been updated', updatedUser);
            })).catch((err)=>{
                console.log('error:',err.message);
                res.send(err.message)
            })
            res.redirect('/user/signout')
        } else {
            console.log('Wrong current password or new password does not match confirm password.')
            res.redirect('/user/changePassword');
        }
    }catch (error) {
        console.log(error.message);
        res.send(error.message);
    }
}