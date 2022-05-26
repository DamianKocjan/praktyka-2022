const { query } = require("../db");

module.exports.getAll = async (_req, res, next) => {
  try {
    // TODO: filter by userId from request
    const orders = await query("SELECT * FROM order");

    res.json({
      data: orders,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports.get = async (req, res, next) => {
  try {
    // TODO: filter by userId from request
    const [order] = await query("SELECT * FROM order WHERE id = ?", [
      req.params.id,
    ]);

    res.json({
      data: order,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports.create = async (req, res, next) => {
  try {
    const data = [
      req.body.saleId,
      req.body.userId, // TODO: get userId from request
      new Date(),
      "pending",
    ];

    const { insertId } = await query(
      "INSERT INTO order (`saleId`, `userId`, `orderedAt`, `status`) VALUES (?,?,?,?)",
      data
    );
    const [order] = await query("SELECT * FROM order WHERE id = ?", [insertId]);

    res.json({
      data: order,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports.update = async (req, res, next) => {
  try {
    // TODO: prevent from updating by unathorized users
    const fields = Object.keys(req.body);
    const data = fields.map((field) => `${field} = ?`);
    const values = fields.map((field) => req.body[field]);

    await query(`UPDATE order SET ${data.join(", ")} WHERE id = ?`, [
      ...values,
      req.params.id,
    ]);
    const [order] = await query("SELECT * FROM order WHERE id = ?", [
      req.params.id,
    ]);

    res.json({
      data: order,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
