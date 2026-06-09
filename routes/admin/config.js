const router = require("express").Router();
const { saveConfig, getAllConfigs } = require("../../controller/admin/config");
const { authorization, permissionCheckService } = require("../../middleware/auth")

router.post(
  "/save",
  authorization,
  permissionCheckService({ tabName: "Config", mode: "add" }),
  saveConfig
);
router.post("/all", getAllConfigs);

module.exports = router;