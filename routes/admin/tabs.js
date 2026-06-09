const router = require("express").Router();
const { saveTab, getAllTabs } = require("../../controller/admin/tabs");
const { authorization, permissionCheckService } = require("../../middleware/auth");

router.post("/save", authorization, saveTab);
router.post("/all", getAllTabs);

module.exports = router;