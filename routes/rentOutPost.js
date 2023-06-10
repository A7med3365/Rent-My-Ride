const express = require('express');
const router = express.Router();
const rentOutPostCtrl = require('../controllers/rentOutPost');

router.post('/cars/rentOutForm', rentOutPostCtrl.rentOut_create_post);

module.exports = router;