const {
    addConfigService,
    getAllConfigsService,
} = require("../../services/admin/config");
const {
    successMessage,
    createMessage,
    failureMessage,
} = require("../../utilities/index");

const saveConfig = async (req, res) => {
    try {
        const configData = await addConfigService(req, res);
        return res.status(201).json(createMessage(configData));
    } catch (error) {
        return res.status(400).json(failureMessage(error.message));
    }
};

const getAllConfigs = async (req, res) => {
    try {
        const configData = await getAllConfigsService(req, res);
        return res.status(200).json(successMessage(configData));
    } catch (error) {
        return res.status(400).json(failureMessage(error.message));
    }
};

module.exports = {
    saveConfig,
    getAllConfigs,
};