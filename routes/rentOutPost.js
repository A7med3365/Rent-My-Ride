const express = require("express");
const router = express.Router();
const rentOutPostCtrl = require("../controllers/rentOutPost");
const isLoggedin = require("../config/Auth/ensureAthenticated");

const multer = require("multer");
const storage = require("../config/file/uploadConfig");

const upload = multer({ storage: storage });

router.post(
  "/cars/rentOutForm",
  isLoggedin.ensureAthenticated,
  upload.fields([{ name: "files", maxCount: 10 }]),
  rentOutPostCtrl.rentOut_create_post
);

module.exports = router;
