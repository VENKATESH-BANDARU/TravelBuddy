const router = require("express").Router();
const { saveRole, getAllRoles } = require("../../controller/admin/role");
const { authorization, permissionCheckService } = require("../../middleware/auth");

router.post("/save", authorization, saveRole);
router.post("/all", getAllRoles);

module.exports = router;