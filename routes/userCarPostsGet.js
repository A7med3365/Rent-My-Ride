const express = require("express");

const userCarPostsGetCtrl = require("../controllers/userCarPostsGet");
const isLoggedin = require("../config/Auth/ensureAthenticated");
const router = express.Router();

router.get(
  "/cars/ownCarsIndex",
  isLoggedin.ensureAthenticated,
  userCarPostsGetCtrl.userCarPostsGet
);

module.exports = router;
