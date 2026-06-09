const router = require("express").Router();
const { 
    userRegistration,
    userLogin,
} = require("../../controller/user/userAuth");
const { authorization, permissionCheckService } = require("../../middleware/auth");

router.post("/singup", userRegistration);
router.post("/singin", userLogin);

module.exports = router;