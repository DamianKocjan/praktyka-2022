const { query } = require("../db");

module.exports.getAll = async (_req, res, next) => {
  try {
    // TODO: get all addresses for a user
    const addresses = await query("SELECT * FROM address");

    res.json({
      data: addresses,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports.get = async (req, res, next) => {
  try {
    // TODO: WHERE ... AND userId = ?
    const [address] = await query("SELECT * FROM address WHERE id = ?", [
      req.params.id,
    ]);

    res.json({
      data: address,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports.create = async (req, res, next) => {
  try {
    // TODO: get user from request
    const data = [
      req.body.addressId,
      req.body.street,
      req.body.city,
      req.body.zip,
      req.body.state,
      req.body.country,
      req.body.isSelected,
    ];

    const { insertId } = await query(
      "INSERT INTO address (`addressId`, `street`, `city`, `zip`, `state`, `country`, `isSelected`) VALUES (?,?,?,?,?,?,?)",
      data
    );
    const [address] = await query("SELECT * FROM address WHERE id = ?", [
      insertId,
    ]);

    res.json({
      data: address,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports.update = async (req, res, next) => {
  try {
    // TODO: authorize user
    const fields = Object.keys(req.body);
    const data = fields.map((field) => `${field} = ?`);
    const values = fields.map((field) => req.body[field]);

    await query(`UPDATE address SET ${data.join(", ")} WHERE id = ?`, [
      ...values,
      req.params.id,
    ]);
    const [address] = await query("SELECT * FROM address WHERE id = ?", [
      req.params.id,
    ]);

    res.json({
      data: address,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports.delete = async (req, res, next) => {
  try {
    // TODO: authorize user
    await query("DELETE FROM address WHERE id = ?", [req.params.id]);

    res.json({
      message: "Address deleted",
      status: "success",
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
