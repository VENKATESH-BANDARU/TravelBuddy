const adminModel = require("../../models/adminModel");
const { v4: uuidv4 } = require("uuid");
const requestIp = require("request-ip");
const {
  successMessage,
  createMessage,
  failureMessage,
} = require("../../utilities/index");
const {
  passwordEncrypt,
  comparePassword,
  jwtToken,
  decrypt,
  encrypt,
  deviceInfo,
  generateToken,
} = require("../../utilities/helplers");

const adminRegistrationService = async (req) => {
  const validate = await adminModel.findOne({ email: req.body.email });
  if (validate) {
    throw new Error("Email already exists");
  }

  const hashedPassword = encrypt(req.body.password);

  req.body.password = hashedPassword;

  const results = await new adminModel(req.body).save();

  const payload = { userId: results._id };
  const token = generateToken(payload);

  return { token };
};

const adminLoginService = async (req) => {
  const decryptedPassword = encrypt(req.body.password);
  const body = {
    // userName: req.body.userName,
    // password: decryptedPassword,
    // deviceInfo: deviceInfo(req),
    token: uuidv4(),
  };
console.log(decryptedPassword)
  const user = await adminModel.findOne({
    userName: req.body.userName,
    password: decryptedPassword,
  });

  if (!user) {
    throw new Error("Incorrect user name or password");
  }
  const adminId = user._id;
  const ipAdress = requestIp.getClientIp(req);
  if (user.userIP && user.userIP !== "0" && user.userIP !== ipAdress) {
    throw new Error("Invalid IP Address");
  }

  await adminModel.updateOne(
    { _id: adminId },
    {
      $set: {
        token: body.token,
        // deviceInfo: deviceInfo(req),
      },
    }
  );

  const tokenPayload = {
    adminId: adminId,
    WrEId: user.WrEId,
    userType: user.userType,
    roleId: user.roleId,
    userName: user.userName,
    isSuperAdmin: user.isSuperAdmin,
    parentId: user.parentId,
    token: body.token,
  };

  //* token created
  const token = generateToken(tokenPayload);

  return {
    token,
    userName: user.userName
  };
}

const getAllAdminService = async (req, res) => {
  const adminData = await adminModel.find({ isDeleted: false });
  return adminData;
}

module.exports = {
  adminRegistrationService,
  adminLoginService,
  getAllAdminService,
};
