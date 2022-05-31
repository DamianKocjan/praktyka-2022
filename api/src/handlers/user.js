const { query } = require("../db");

module.exports.getAll = async (_req, res, next) => {
  try {
    const users = await query("SELECT id, email, phoneNumber, firstName, lastName, dateOfBirth, street, city, zip, state, country, createdAt, updatedAt FROM user");

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
    const [user] = await query("SELECT id, email, phoneNumber, firstName, lastName, dateOfBirth, street, city, zip, state, country, createdAt, updatedAt FROM user WHERE id = ?", [
      req.params.id,
    ]);

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
    // things that we don't wanna update
    delete req.body.id;
    delete req.body.email;
    delete req.body.passwordHashed;
    delete req.body.createdAt;
    delete req.body.updatedAt;

    const fields = Object.keys(req.body);
    const data = fields.map((field) => `${field} = ?`);
    const values = fields.map((field) => req.body[field]);

    await query(`UPDATE user SET ${data.join(", ")} WHERE id = ?`, [
      ...values,
      req.params.id,
    ]);
    const [user] = await query("SELECT id, email, phoneNumber, firstName, lastName, dateOfBirth, street, city, zip, state, country, createdAt, updatedAt FROM user WHERE id = ?", [
      req.params.id,
    ]);

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
