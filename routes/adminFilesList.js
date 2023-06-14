const express = require("express");

const adminFilesListCtrl = require("../controllers/adminFilesList");

const router = express.Router();

router.get('/admin/filesIndex', adminFilesListCtrl.adminFilesList);

module.exports = router;
