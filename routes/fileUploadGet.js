const express = require("express");

const fileUploadGetCtrl = require("../controllers/fileUploadGet");
const isLoggedin = require("../config/Auth/ensureAthenticated");

const router = express.Router();

router.get(
  "/file/upload",
  isLoggedin.ensureAthenticated,
  fileUploadGetCtrl.fileUploadGet
);

module.exports = router;
