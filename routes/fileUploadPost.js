const express = require("express");
const isLoggedin = require("../config/Auth/ensureAthenticated");
const fileUploadPostCtrl = require("../controllers/fileUploadPost");

const router = express.Router();

const multer = require("multer");
const storage = require("../config/file/uploadConfig");

const upload = multer({ storage: storage });
// const upload = multer({ dest: "public/uploads" });

router.post(
  "/file/upload",
  isLoggedin.ensureAthenticated,
  upload.single("file"),
  fileUploadPostCtrl.fileUploadPost
);

module.exports = router;
