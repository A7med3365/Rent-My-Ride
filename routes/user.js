const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

router.get('/user/profile', userCtrl.user_profile_get);

module.exports = router;