const { roleByTabService } = require("../services/admin/role");
const { deviceInfo } = require("../utilities/helplers");
const jwt = require("jsonwebtoken");

async function authorization(req) {
  const wrInfo = deviceInfo(req);
  try {
    let token = req.headers.authorization;
    token = token?.split(" ")[1];
    const secretKey = process.env.SECRET_KEY_TOKEN || "hashvalue21gh34";

    if (!token || !secretKey) {
      throw new Error("Token Not Found");
    }

    const valid = jwt.verify(token, secretKey);
    const decode = jwt.decode(token, secretKey);

    // // do not login user when is login is true have to add in userLogsInfo table
    // const user = await checkValidQuery(decode, fastify);

    // if (!user) {
    //   throw new Error("Invalid Token");
    // }

    req.userTokenInfo = { ...decode, ipAdress: req.ip };
  } catch (e) {
    // // create table to save all logs of user login or access
    // userLoginInfo = {
    //   WrUserId: null,
    //   WrUserType: -1,
    //   wrInfo,
    //   wrIsLogin: false,
    //   wrToken: null,
    // };

    // await createUserLoginInfo(userLoginInfo, fastify);

    throw new Error(e.message);
  }
}

async function authorization(req, res, next) {
  try {
    const wrInfo = deviceInfo(req); // if you log/store
    let token = req.headers.authorization;
    token = token?.split(" ")[1];

    const secretKey = process.env.SECRET_KEY_TOKEN || "hashvalue21gh34";
    if (!token || !secretKey) {
      const err = new Error("Token Not Found");
      err.status = 401;
      throw err;
    }

    // verify throws if invalid
    const decoded = jwt.verify(token, secretKey);

    // // do not login user when is login is true have to add in userLogsInfo table
    // const user = await checkValidQuery(decode, fastify);

    // if (!user) {
    //   throw new Error("Invalid Token");
    // }

    // attach to req for downstream handlers
    req.userTokenInfo = { ...decoded, ipAdress: req.ip, wrInfo };
    return next();
  } catch (err) {
    // // create table to save all logs of user login or access
    // userLoginInfo = {
    //   WrUserId: null,
    //   WrUserType: -1,
    //   wrInfo,
    //   wrIsLogin: false,
    //   wrToken: null,
    // };

    // await createUserLoginInfo(userLoginInfo, fastify);
    err.status = err.status || 401;
    return next(err);
  }
}

function permissionCheckService(data = {}) {
  const { tabName, mode } = data;

  return async function (req, res, next) {
    try {
      const permission = await roleByTabService(req, tabName);

      if (mode === "view" && !permission.isViewPermission) {
        return res.status(403).json({ success: false, message: "You don't have permission to view" });
      }
      if (mode === "add" && !permission.isAddPermission) {
        return res.status(403).json({ success: false, message: "You don't have permission to add" });
      }
      if (mode === "edit" && !permission.isEditPermission) {
        return res.status(403).json({ success: false, message: "You don't have permission to edit" });
      }
      if (mode === "delete" && !permission.isDeletePermission) {
        return res.status(403).json({ success: false, message: "You don't have permission to delete" });
      }

      req.permission = permission;
      next();
    } catch (err) {
      if (!res.headersSent) {
        return res.status(err.status || 500).json({ success: false, message: err.message || "Server error" });
      }
      next(err);
    }
  };
}

module.exports = {
  permissionCheckService,
  authorization,
}