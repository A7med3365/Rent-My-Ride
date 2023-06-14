const express = require("express");

const adminFileViewGetCtrl = require("../controllers/adminFileViewGet");

const router = express.Router();

router.get('/admin/file/view', adminFileViewGetCtrl.adminFileViewGet);

module.exports = router;
