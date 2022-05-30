const { query, getOneOr404 } = require("../db");

module.exports.getAll = async (_req, res, next) => {
  try {
    const services = await query("SELECT * FROM service");

    res.json({
      data: services,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports.get = async (req, res, next) => {
  try {
    const service = await getOneOr404("SELECT * FROM service WHERE id = ?", [
      req.params.id,
    ]);

    res.json({
      data: service,
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
      req.body.vehicleId,
      userId,
      req.body.cost,
      "pending",
      req.body.description,
    ];

    const { insertId } = await query(
      "INSERT INTO service (`vehicleId`, `userId`, `cost`, `status`, `description`) VALUES (?,?,?,?,?)",
      data
    );
    const [service] = await query("SELECT * FROM service WHERE id = ?", [
      insertId,
    ]);

    res.json({
      data: service,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports.update = async (req, res, next) => {
  try {
    const { userId } = req;
    await getOneOr404("SELECT * FROM service WHERE id = ? AND userId = ?", [
      req.params.id,
      userId,
    ]);

    const fields = Object.keys(req.body);
    const data = fields.map((field) => `${field} = ?`);
    const values = fields.map((field) => req.body[field]);

    await query(`UPDATE service SET ${data.join(", ")} WHERE id = ?`, [
      ...values,
      req.params.id,
    ]);
    const [service] = await query("SELECT * FROM service WHERE id = ?", [
      req.params.id,
    ]);

    res.json({
      data: service,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
