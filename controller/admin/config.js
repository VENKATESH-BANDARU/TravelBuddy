const {
    addConfigService,
    getAllConfigsService,
} = require("../../services/admin/config");
const { ERROR_CODES, error, success } = require("../../utilities/index");

const saveConfig = async (req, res) => {
    try {
        const configData = await addConfigService(req, res);
        return res.status(200).json(success(configData, 200));
    } catch (err) {
        return res.status(200).json(error(err.message, ERROR_CODES.SERVER_ERROR, 200));
    }
};

const getAllConfigs = async (req, res) => {
    try {
        const configData = await getAllConfigsService(req, res);
        return res.status(200).json(success(configData, 200));
    } catch (err) {
        return res.status(200).json(error(err.message, ERROR_CODES.SERVER_ERROR, 200));
    }
};

module.exports = {
    saveConfig,
    getAllConfigs,
};