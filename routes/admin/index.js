const router = require("express").Router();
const adminRoutes = require("./admin");
const configRoutes = require("./config");
const roleRoutes = require("./role");
const tabRoutes = require("./tabs");
const permissionRoutes = require("./permission");

router.use("/", adminRoutes);
router.use("/config", configRoutes);
router.use("/role", roleRoutes);
router.use("/tab", tabRoutes);
router.use("/permission", permissionRoutes);

module.exports = router