const {
  adminRegistrationService,
  adminLoginService,
  getAllAdminService,
} = require("../../services/admin/admin");
const { ERROR_CODES, error, success } = require("../../utilities/index");

const adminRegistration = async (req, res) => {
  try {
    const adminData = await adminRegistrationService(req, res);
    return res.status(200).json(success(adminData, 200));
  } catch (err) {
    return res.status(200).json(error(err.message, ERROR_CODES.SERVER_ERROR, 200));
  }
};

const adminLogin = async (req, res) => {
  try {
    const adminData = await adminLoginService(req, res);
    return res.status(200).json(success(adminData, 200));
  } catch (err) {
    return res.status(200).json(error(err.message, ERROR_CODES.SERVER_ERROR, 200));
  }
};

const getAllAdmins = async (req, res) => {
  try {
    const adminData = await getAllAdminService(req, res);
    return res.status(200).json(success(adminData, 200));
  } catch (err) {
    return res.status(200).json(error(err.message, ERROR_CODES.SERVER_ERROR, 200));
  }
};

module.exports = {
  adminRegistration,
  adminLogin,
  getAllAdmins,
};
