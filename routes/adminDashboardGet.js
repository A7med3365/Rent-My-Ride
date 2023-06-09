const express = require("express");

const adminDashboardGetCtrl = require("../controllers/adminDashboardGet");
const ensureAdmin = require("../config/Auth/ensureAdmin");

const router = express.Router();

router.get(
  "/admin/dashboard",
  ensureAdmin.ensureAdmin,
  adminDashboardGetCtrl.adminDashboardGet
);

module.exports = router;
