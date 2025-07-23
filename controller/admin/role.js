const {
    saveRoleService,
    getAllRolesService,
} = require("../../services/admin/role");
const {
    successMessage,
    createMessage,
    failureMessage,
} = require("../../utilities/index");

const saveRole = async (req, res) => {
    try {
        const roleData = await saveRoleService(req, res);
        return res.status(201).json(createMessage(roleData));
    } catch (error) {
        return res.status(400).json(failureMessage(error.message));
    }
};

const getAllRoles = async (req, res) => {
    try {
        const roleData = await getAllRolesService(req, res);
        return res.status(201).json(successMessage(roleData));
    } catch (error) {
        return res.status(400).json(failureMessage(error.message));
    }
};

module.exports = {
    saveRole,
    getAllRoles,
};