const configModel = require("../../models/configModel");

const addConfigService = async (req, res) => {
    const validateConfig = await configModel.findOne({ key: req.body.key });
    if (validateConfig) {
        throw new Error("Config key already exists");
    }

    const saveData = await new configModel(req.body).save();
    return saveData;
}

const getAllConfigsService = async (req, res) => {
    const configData = await configModel.find({ isDeleted: false });
    return configData;
}

module.exports = {
    addConfigService,
    getAllConfigsService,
}