const express = require('express');
const router = express.Router();
const changePasswordCtrl = require('../controllers/changePassword');

router.get('/user/changePassword', changePasswordCtrl.change_password_get);
router.post('/user/changePassword', changePasswordCtrl.change_password_post);

module.exports = router;