const express = require('express');
const router = express.Router();
const carPostDeleteCtrl = require('../controllers/carPostDelete');

router.post('ownCarsIndex/delete', carPostDeleteCtrl.car_post_delete);

module.exports = router;