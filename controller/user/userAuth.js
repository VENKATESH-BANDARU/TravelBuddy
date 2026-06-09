const { 
    userRegistrationService,
    userLoginService,
} = require("../../services/user/auth");
const { ERROR_CODES, error, success } = require("../../utilities/index");

const userRegistration = async(req, res) => {
    try {
        const registration = await userRegistrationService(req, res);
        return res.status(201).json(success(registration, 200));
    } catch (err) {
         return res.status(200).json(error(err.message, ERROR_CODES.SERVER_ERROR, 200));
    }
}

const userLogin = async(req, res) => {
    try {
        const registration = await userLoginService(req, res);
        return res.status(201).json(success(registration, 200));
    } catch (err) {
         return res.status(200).json(error(err.message, ERROR_CODES.SERVER_ERROR, 200));
    }
}

module.exports = {
    userRegistration,
    userLogin,
}