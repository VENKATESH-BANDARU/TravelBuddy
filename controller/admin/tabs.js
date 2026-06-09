const {
    saveTabService,
    getAllTabsService,
} = require("../../services/admin/tabs");
const { ERROR_CODES, error, success } = require("../../utilities/index");

const saveTab = async (req, res) => {
    try {
        const tabsData = await saveTabService(req, res);
        return res.status(200).json(success(tabsData, 200));
    } catch (err) {
        return res.status(200).json(error(err.message, ERROR_CODES.SERVER_ERROR, 200));
    }
};

const getAllTabs = async (req, res) => {
    try {
        const tabsData = await getAllTabsService(req, res);
        return res.status(200).json(success(tabsData, 200));
    } catch (err) {
        return res.status(200).json(error(err.message, ERROR_CODES.SERVER_ERROR, 200));
    }
};

module.exports = {
    saveTab,
    getAllTabs,
};