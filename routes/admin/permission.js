const router = require("express").Router();
const { savePermission, getAllPermission } = require("../../controller/admin/permission");

router.post("/save", savePermission);
router.post("/all", getAllPermission);

module.exports = router;