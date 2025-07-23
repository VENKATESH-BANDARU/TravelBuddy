const {
  adminRegistrationService,
  adminLoginService,
  getAllAdminService,
} = require("../../services/admin/admin");
const {
  successMessage,
  createMessage,
  failureMessage,
} = require("../../utilities/index");

const adminRegistration = async (req, res) => {
  try {
    const adminData = await adminRegistrationService(req, res);
    return res.status(201).json(createMessage(adminData));
  } catch (error) {
    return res.status(400).json(failureMessage(error.message));
  }
};

const adminLogin = async (req, res) => {
  try {
    const adminData = await adminLoginService(req, res);
    return res.status(201).json(createMessage(adminData));
  } catch (error) {
    return res.status(400).json(failureMessage(error.message));
  }
};

const getAllAdmins = async (req, res) => {
  try {
    const adminData = await getAllAdminService(req, res);
    return res.status(200).json(successMessage(adminData));
  } catch (error) {
    return res.status(400).json(failureMessage(error.message));
  }
};

module.exports = {
  adminRegistration,
  adminLogin,
  getAllAdmins,
};
