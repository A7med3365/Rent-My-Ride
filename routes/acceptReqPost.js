const express = require("express");

const acceptReqPostCtrl = require("../controllers/acceptReqPost");
const isLoggedin = require("../config/Auth/ensureAthenticated");
const router = express.Router();

router.get(
  "/request/accepted",
  isLoggedin.ensureAthenticated,
  acceptReqPostCtrl.acceptReqPost
);

module.exports = router;
