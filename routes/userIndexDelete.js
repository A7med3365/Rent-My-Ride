const express = require('express');
const router = express.Router();
const userIndexDeleteCtrl = require('../controllers/userIndexDelete');

router.post('/userIndex/delete', userIndexDeleteCtrl.user_delete);


module.exports = router;