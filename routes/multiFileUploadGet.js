const express = require("express");

const multiFileUploadGetCtrl = require("../controllers/multiFileUploadGet");

const router = express.Router();

router.get('/test/file/mult', multiFileUploadGetCtrl.multiFileUploadGet);

module.exports = router;
