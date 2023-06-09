const express = require("express");

const fileUploadGetCtrl = require("../controllers/fileUploadGet");

const router = express.Router();

router.get('/file/upload', fileUploadGetCtrl.fileUploadGet);

module.exports = router;
