const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const uaParser = require("ua-parser-js");
const crypto = require("crypto");

const passwordEncrypt = async (passcode) => {
  try {
    const hashedPassword = await bcrypt.hash(passcode, 10);
    return hashedPassword;
  } catch (error) {
    return error.message;
  }
};

const comparePassword = async (passcode, newPasscode) => {
  try {
    const match = await bcrypt.compare(passcode, newPasscode);
    return match;
  } catch (error) {
    return error.message;
  }
};

const jwtToken = async (data, secret) => {
  try {
    let jsonToken = jwt.sign(data, secret, { expiresIn: '25d' });
    return jsonToken;
  } catch (error) {
    return error.message;
  }
};

const generateToken = (payload) => {
  const options = {
    expiresIn: process.env.TOKEN_EXPIRY_TIME || "4h",
  };
  const token = jwt.sign(payload, process.env.SECRET_KEY_TOKEN, options);
  return token;
};


const deviceInfo = (req) => {
  const parsedUA = uaParser(req.headers["user-agent"]);
  return JSON.stringify({
    browserInfo: {
      ip: req.ip,
      browser: {
        name: parsedUA.browser.name,
        version: parsedUA.browser.version,
      },
      os: {
        name: parsedUA.os.name,
        version: parsedUA.os.version,
      },
      device: {
        model: parsedUA.device.model,
        type: parsedUA.device.type,
        vendor: parsedUA.device.vendor,
      },
    },
  });
};

const convertStringToBuffer = (str) => {
  const buf = Buffer.alloc(32); // 256-bit buffer
  buf.write(str, "utf-8"); // Fill buffer with string
  return buf;
};

const key = convertStringToBuffer(process.env.ENCRYPTION_KEY); // 256-bit key for AES-256
const algorithm = "aes-256-ecb"; // ECB mode (not recommended for most cases)

function encrypt(input) {
  const cipher = crypto.createCipheriv(algorithm, key, Buffer.alloc(0)); // Using ECB mode, so IV is empty
  let encrypted = cipher.update(input, "utf-8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
}

function decrypt(encrypted) {
  const decipher = crypto.createDecipheriv(algorithm, key, Buffer.alloc(0)); // Using ECB mode, so IV is empty
  let decrypted = decipher.update(encrypted, "hex", "utf-8");
  decrypted += decipher.final("utf-8");
  return decrypted;
}

module.exports = {
  passwordEncrypt,
  comparePassword,
  jwtToken,
  deviceInfo,
  encrypt,
  decrypt,
  generateToken,
}