const router = require("express").Router();
const providerRoutes = require("./provider/index");
const adminRoutes = require('./admin/index')
const userRoutes = require("./users/index");

router.use("/provider", providerRoutes);
router.use("/admin", adminRoutes);
router.use("/user", userRoutes);

module.exports = router