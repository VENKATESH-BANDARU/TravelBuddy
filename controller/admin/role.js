const {
    saveRoleService,
    getAllRolesService,
} = require("../../services/admin/role");
const { ERROR_CODES, error, success } = require("../../utilities/index");

const saveRole = async (req, res) => {
    try {
        const roleData = await saveRoleService(req, res);
        return res.status(200).json(success(roleData, 200));
    } catch (err) {
        return res.status(200).json(error(err.message, ERROR_CODES.SERVER_ERROR, 200));
    }
};

const getAllRoles = async (req, res) => {
    try {
        const roleData = await getAllRolesService(req, res);
        return res.status(200).json(success(roleData, 200));
    } catch (err) {
        return res.status(200).json(error(err.message, ERROR_CODES.SERVER_ERROR, 200));
    }
};

module.exports = {
    saveRole,
    getAllRoles,
};