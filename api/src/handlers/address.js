const { query, getOneOr404 } = require("../db");

module.exports.getAll = async (req, res, next) => {
  try {
    const { userId } = req;
    const addresses = await query("SELECT * FROM address WHERE userId = ?", [
      userId,
    ]);

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
    const { userId } = req;
    const address = await getOneOr404(
      "SELECT * FROM address WHERE id = ? AND userId = ?",
      [req.params.id, userId]
    );

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
    const { userId } = req;
    const data = [
      req.body.addressId,
      req.body.street,
      req.body.city,
      req.body.zip,
      req.body.state,
      req.body.country,
      req.body.isSelected,
      userId,
    ];

    const { insertId } = await query(
      "INSERT INTO address (`addressId`, `street`, `city`, `zip`, `state`, `country`, `isSelected`, `userId`) VALUES (?,?,?,?,?,?,?,?)",
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
    const { userId } = req;
    await getOneOr404("SELECT * FROM address WHERE id = ? AND userId = ?", [
      req.params.id,
      userId,
    ]);

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
    const { userId } = req;
    await getOneOr404("SELECT * FROM address WHERE id = ? AND userId = ?", [
      req.params.id,
      userId,
    ]);

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
