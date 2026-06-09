const userModel = require("../../models/userModel");
const { passwordEncrypt, comparePassword, generateToken } = require("../../utilities/helplers");

const userRegistrationService = async(req, res) => {
    const validateUser = await userModel.findOne({
        $or:[
            { email: req.body.email },
            { phoneNumber: req.body.phoneNumber }
        ]
    });
    if (validateUser) {
        throw new Error("User already existed with this data");
    }
    const encryptPassword = await passwordEncrypt(req.body.password);
    req.body.password = encryptPassword
    const saveData = await new userModel(req.body).save();
    const token = generateToken({userId: saveData._id});
    return { token }
}

const userLoginService = async(req) => {
    const { identifier, password } = req.body;
    const validateUser = await userModel.findOne({
        $or: [
            { email: identifier },
            { phoneNumber: identifier }
        ]
    });
    if (!validateUser) {
        throw new Error("Invalid credentials");
    }
    const decyptPassword = await comparePassword(password, validateUser.password);
    if (!decyptPassword) {
        throw new Error("Invalid credentials");
    }
    if (validateUser.isActive == false) {
        throw new Error("User account inActive");
    }
    const token = generateToken({userId: validateUser._id});
    return { token }
}

module.exports = {
    userRegistrationService,
    userLoginService,
}