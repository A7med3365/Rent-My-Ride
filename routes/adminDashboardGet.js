const express = require("express");

const adminDashboardGetCtrl = require("../controllers/adminDashboardGet");
const ensureAdmin = require("../config/Auth/ensureAdmin");
const isLoggedin = require("../config/Auth/ensureAthenticated");
const router = express.Router();

router.get(
  "/admin/dashboard",
  isLoggedin.ensureAthenticated,
  ensureAdmin.ensureAdmin,
  adminDashboardGetCtrl.adminDashboardGet
);

module.exports = router;
