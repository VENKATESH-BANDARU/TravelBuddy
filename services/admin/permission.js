const permissionModel = require("../../models/permissionModel");

const savePermissionService = async (req, res) => {
    const validate = await permissionModel.findOne({
        tabId: req.body.tabId, roleId: req.body.tabId
    });
    if (validate) {
        throw new Error("Permission already exists");
    }

    const saveData = await new permissionModel(req.body).save();
    return saveData;
}

const getAllPermissionService = async (req, res) => {
    const permissionData = await permissionModel.find({ isDeleted: false });
    return permissionData;
}

module.exports = {
    savePermissionService,
    getAllPermissionService,
}