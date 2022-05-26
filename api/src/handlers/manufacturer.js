const { query } = require("../db");

module.exports.getAll = async (_req, res, next) => {
  try {
    const manufacturers = await query("SELECT * FROM manufacturer");

    res.json({
      data: manufacturers,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports.get = async (req, res, next) => {
  try {
    const [manufacturer] = await query(
      "SELECT * FROM manufacturer WHERE id = ?",
      [req.params.id]
    );

    res.json({
      data: manufacturer,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports.create = async (req, res, next) => {
  try {
    const data = [
      req.body.name,
      req.body.description,
      req.body.yearOfEstablishment,
    ];

    const { insertId } = await query(
      "INSERT INTO manufacturer (`name`, `description`, `yearOfEstablishment`) VALUES (?,?,?)",
      data
    );
    const [manufacturer] = await query(
      "SELECT * FROM manufacturer WHERE id = ?",
      [insertId]
    );

    res.json({
      data: manufacturer,
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

    await query(`UPDATE manufacturer SET ${data.join(", ")} WHERE id = ?`, [
      ...values,
      req.params.id,
    ]);
    const [manufacturer] = await query(
      "SELECT * FROM manufacturer WHERE id = ?",
      [req.params.id]
    );

    res.json({
      data: manufacturer,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports.delete = async (req, res, next) => {
  try {
    await query("DELETE FROM manufacturer WHERE id = ?", [req.params.id]);

    res.json({
      message: "Manufacturer deleted",
      status: "success",
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
