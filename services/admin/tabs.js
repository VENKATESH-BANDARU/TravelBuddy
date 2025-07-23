const tabsModel = require("../../models/tabsModel");

const saveTabService = async (req, res) => {
    const validate = await tabsModel.findOne({ tabName: req.body.tabName });
    if (validate) {
        throw new Error("Tab already exists");
    }

    const saveData = await new tabsModel(req.body).save();
    return saveData;
}

const getAllTabsService = async (req, res) => {
    const tabsData = await tabsModel.find({ isDeleted: false });
    return tabsData;
}

module.exports = {
    saveTabService,
    getAllTabsService,
}