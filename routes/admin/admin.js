const router = require("express").Router();
const { adminRegistration, adminLogin, getAllAdmins } = require("../../controller/admin/admin.controller");
const { authorization, permissionCheckService } = require("../../middleware/auth");

router.post("/register", authorization, adminRegistration);
router.post("/login", adminLogin);
router.post("/all", authorization, getAllAdmins);

module.exports = router;