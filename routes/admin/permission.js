const router = require("express").Router();
const { savePermission, getAllPermission } = require("../../controller/admin/permission");
const { authorization, permissionCheckService } = require("../../middleware/auth");

router.post("/save", authorization, savePermission);
router.post("/all", getAllPermission);

module.exports = router;