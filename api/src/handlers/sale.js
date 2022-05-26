const { query } = require("../db");

module.exports.getAll = async (_req, res, next) => {
  try {
    const sales = await query("SELECT * FROM sale");

    res.json({
      data: sales,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports.get = async (req, res, next) => {
  try {
    const [sale] = await query("SELECT * FROM sale WHERE id = ?", [
      req.params.id,
    ]);

    res.json({
      data: sale,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports.create = async (req, res, next) => {
  try {
    const data = [
      req.body.vehicleId,
      req.body.cost,
      req.body.status,
      req.body.guarantee,
    ];

    const { insertId } = await query(
      "INSERT INTO sale (`vehicleId`, `cost`, `status`, `guarantee`) VALUES (?,?,?,?)",
      data
    );
    const [sale] = await query("SELECT * FROM sale WHERE id = ?", [insertId]);

    res.json({
      data: sale,
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

    await query(`UPDATE sale SET ${data.join(", ")} WHERE id = ?`, [
      ...values,
      req.params.id,
    ]);
    const [sale] = await query("SELECT * FROM sale WHERE id = ?", [
      req.params.id,
    ]);

    res.json({
      data: sale,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
