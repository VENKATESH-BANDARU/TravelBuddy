const router = require("express").Router();
const providerRoutes = require("./provider/index");
const adminRoutes = require('./admin/index')

router.use("/provider", providerRoutes);
router.use("/admin", adminRoutes);


module.exports = router