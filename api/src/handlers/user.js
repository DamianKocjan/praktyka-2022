const { query } = require("../db");
const { hashPassword } = require("../services/auth");

module.exports.getAll = async (_req, res, next) => {
  try {
    const users = await query("SELECT * FROM user");

    // delete password hash from response
    users.forEach((user) => delete user.passwordHashed);

    res.json({
      data: users,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports.get = async (req, res, next) => {
  try {
    const [user] = await query("SELECT * FROM user WHERE id = ?", [
      req.params.id,
    ]);

    // delete password hash from response
    delete user[0].passwordHashed;

    res.json({
      data: user,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports.create = async (req, res, next) => {
  try {
    const password = await hashPassword(req.body.password);

    const data = [
      req.body.userId,
      req.body.email,
      password,
      req.body.phoneNumber,
      req.body.firstName,
      req.body.lastName,
      req.body.dateOfBirth,
    ];

    const { insertId } = await query(
      "INSERT INTO user (`userId`, `email`, `passwordHashed`, `phoneNumber`, `firstName`, `lastName`, `dateOfBirth`) VALUES (?,?,?,?,?,?,?)",
      data
    );
    const [user] = await query("SELECT * FROM user WHERE id = ?", [insertId]);
    delete user.passwordHashed;

    res.json({
      data: user,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports.update = async (req, res, next) => {
  try {
    const fields = Object.keys(req.body);
    const data = fields.map((field) => `${field} = ?`);
    const values = fields.map((field) => req.body[field]);

    await query(`UPDATE user SET ${data.join(", ")} WHERE id = ?`, [
      ...values,
      req.params.id,
    ]);
    const [user] = await query("SELECT * FROM user WHERE id = ?", [
      req.params.id,
    ]);
    delete user.passwordHashed;

    res.json({
      data: user,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports.delete = async (req, res, next) => {
  try {
    await query("DELETE FROM user WHERE id = ?", [req.params.id]);

    res.json({
      message: "User deleted",
      status: "success",
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
