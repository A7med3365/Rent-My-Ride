const express = require('express');
const router = express.Router();
const rentOutGetCtrl = require('../controllers/rentOutGet');

router.get('/cars/rentOutForm', rentOutGetCtrl.rentOut_create_get);

module.exports = router;