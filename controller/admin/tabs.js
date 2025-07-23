const {
    saveTabService,
    getAllTabsService,
} = require("../../services/admin/tabs");
const {
    successMessage,
    createMessage,
    failureMessage,
} = require("../../utilities/index");

const saveTab = async (req, res) => {
    try {
        const tabsData = await saveTabService(req, res);
        return res.status(201).json(createMessage(tabsData));
    } catch (error) {
        return res.status(400).json(failureMessage(error.message));
    }
};

const getAllTabs = async (req, res) => {
    try {
        const tabsData = await getAllTabsService(req, res);
        return res.status(201).json(successMessage(tabsData));
    } catch (error) {
        return res.status(400).json(failureMessage(error.message));
    }
};

module.exports = {
    saveTab,
    getAllTabs,
};