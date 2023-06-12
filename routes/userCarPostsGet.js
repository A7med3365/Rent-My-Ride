const express = require("express");

const userCarPostsGetCtrl = require("../controllers/userCarPostsGet");

const router = express.Router();

router.get('/user/posts', userCarPostsGetCtrl.userCarPostsGet);

module.exports = router;
