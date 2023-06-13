const express = require("express");

const rejectReqPostCtrl = require("../controllers/rejectReqPost");
const isLoggedin = require("../config/Auth/ensureAthenticated");
const router = express.Router();

router.get(
  "/request/rejected",
  isLoggedin.ensureAthenticated,
  rejectReqPostCtrl.rejectReqPost
);

module.exports = router;
