const router = require("express").Router();
const { saveRole, getAllRoles } = require("../../controller/admin/role");

router.post("/save", saveRole);
router.post("/all", getAllRoles);

module.exports = router;