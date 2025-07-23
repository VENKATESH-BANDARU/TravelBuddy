const router = require("express").Router();
const { adminRegistration, adminLogin, getAllAdmins } = require("../../controller/admin/admin.controller");

router.post("/register", adminRegistration);
router.post("/login", adminLogin);
router.post("/all", getAllAdmins);

module.exports = router;