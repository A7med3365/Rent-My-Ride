const express = require("express");

const multiFileUploadPostCtrl = require("../controllers/multiFileUploadPost");

const router = express.Router();

const multer = require("multer");
const storage = require("../config/file/uploadConfig");

const upload = multer({ storage: storage });

router.post(
  "/test/file/mult",
  upload.fields([{ name: "files", maxCount: 10 }]),
  multiFileUploadPostCtrl.multiFileUploadPost
);

module.exports = router;
