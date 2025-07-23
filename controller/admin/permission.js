const {
    savePermissionService,
    getAllPermissionService,
} = require("../../services/admin/permission");
const {
    successMessage,
    createMessage,
    failureMessage,
} = require("../../utilities/index");

const savePermission = async (req, res) => {
    try {
        const permissionData = await savePermissionService(req, res);
        return res.status(201).json(createMessage(permissionData));
    } catch (error) {
        return res.status(400).json(failureMessage(error.message));
    }
};

const getAllPermission = async (req, res) => {
    try {
        const permissionData = await getAllPermissionService(req, res);
        return res.status(200).json(successMessage(permissionData));
    } catch (error) {
        return res.status(400).json(failureMessage(error.message));
    }
};

module.exports = {
    savePermission,
    getAllPermission,
};