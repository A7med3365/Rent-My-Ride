const express = require("express");

const editCarFormPostCtrl = require("../controllers/editCarFormPost");

const router = express.Router();

router.post('/cars/editCarForm', editCarFormPostCtrl.editCarFormPost);

module.exports = router;
