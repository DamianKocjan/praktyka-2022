const { query, getOneOr404 } = require("../db");

module.exports.getAll = async (req, res, next) => {
  try {
    const { userId } = req;
    const orders = await query("SELECT * FROM order WHERE userId = ?", [
      userId,
    ]);

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
    const { userId } = req;
    const order = await getOneOr404(
      "SELECT * FROM order WHERE id = ? AND userId",
      [req.params.id, userId]
    );

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
    const {userId} = req;
    const data = [
      req.body.saleId,
      userId,
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
    const { userId } = req;

    await getOneOr404("SELECT * FROM order WHERE id = ? AND userId = ?", [
      req.params.id,
      userId,
    ]);

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
