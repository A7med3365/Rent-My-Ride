const express = require("express");

const viewTestCtrl = require("../controllers/viewTest");

const router = express.Router();

router.get("/test", viewTestCtrl.viewTest);
router.get("/test-login", viewTestCtrl.loginTest);
router.get("/test-profile", viewTestCtrl.profileTest);
router.get("/test-editProfile", viewTestCtrl.editProfileTest);
module.exports = router;
