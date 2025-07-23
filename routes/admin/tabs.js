const router = require("express").Router();
const { saveTab, getAllTabs } = require("../../controller/admin/tabs");

router.post("/save", saveTab);
router.post("/all", getAllTabs);

module.exports = router;