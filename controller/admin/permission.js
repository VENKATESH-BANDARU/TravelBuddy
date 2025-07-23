const {
    savePermissionService,
    getAllPermissionService,
} = require("../../services/admin/permission");
const { ERROR_CODES, error, success } = require("../../utilities/index");

const savePermission = async (req, res) => {
    try {
        const permissionData = await savePermissionService(req, res);
        return res.status(200).json(success(permissionData, 200));
    } catch (err) {
        return res.status(200).json(error(err.message, ERROR_CODES.SERVER_ERROR, 200));
    }
};

const getAllPermission = async (req, res) => {
    try {
        const permissionData = await getAllPermissionService(req, res);
        return res.status(200).json(success(permissionData, 200));
    } catch (err) {
        return res.status(200).json(error(err.message, ERROR_CODES.SERVER_ERROR, 200));
    }
};

module.exports = {
    savePermission,
    getAllPermission,
};