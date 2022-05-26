const crypto = require("crypto");
const { bcrypt, bcryptVerify } = require("hash-wasm");
const { query } = require("../db");

const COST_FACTOR = 11;

/**
 * @param {string} password
 * @returns {Promise<string>}
 */
async function hashPassword(password) {
  const salt = crypto.randomBytes(16);

  const key = await bcrypt({
    password,
    salt,
    costFactor: COST_FACTOR,
    outputType: "encoded",
  });

  return key;
}

/**
 * @param {string} hashedPassword
 * @param {string} password
 * @returns {Promise<boolean>}
 */
async function verifyPassword(hashedPassword, password) {
  return await bcryptVerify({
    password,
    hash: hashedPassword,
  });
}

/**
 * @param {string} email
 * @param {string} password
 * @returns {Promise<any>}
 */
async function authenticateUser(email, password) {
  const [user] = await query("SELECT * FROM user WHERE email = ?", [email]);

  if (!user || !user.passwordHashed) {
    return new Error("Email not found");
  }

  if (!(await verifyPassword(user.passwordHashed, password))) {
    return new Error("Password is incorrect");
  }

  const costFactorString = user.passwordHashed.split("$")[2];

  if (!costFactorString) {
    return new Error("Unknown password format.");
  }

  const costFactor = Number.parseInt(costFactorString, 10);
  if (costFactor !== COST_FACTOR) {
    const improvedHash = await hashPassword(password);
    await query("UPDATE user SET passwordHashed = ? WHERE id = ?", [
      improvedHash,
      user.id,
    ]);
  }

  // remove passwordHashed from user object, so we don't send it to the client
  delete user.passwordHashed;

  return user;
}

module.exports = {
  hashPassword,
  verifyPassword,
  authenticateUser,
};
