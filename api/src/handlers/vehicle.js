const { query } = require("../db");

module.exports.getAll = async (_req, res, next) => {
  try {
    const vehicles = await query("SELECT * FROM vehicle");

    res.json({
      data: vehicles,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports.get = async (req, res, next) => {
  try {
    const [vehicle] = await query("SELECT * FROM vehicle WHERE id = ?", [
      req.params.id,
    ]);

    res.json({
      data: vehicle,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports.create = async (req, res, next) => {
  try {
    const data = [
      req.body.manufacturerId,
      req.body.name,
      req.body.model,
      req.body.type,
      req.body.description,
      req.body.condition,
      req.body.productionYear,
      req.body.mileage,
      req.body.doorsNumber,
      req.body.numberOfSeats,
      req.body.color,
      req.body.lacquer,
      req.body.enginePower,
      req.body.engineCapacity,
      req.body.fuelType,
      req.body.testDriveable,
      req.body.vin,
    ];

    const { insertId } = await query(
      "INSERT INTO vehicle (`manufacturerId`, `name`, `model`, `type`, `description`, `condition`, `productionYear`, `mileage`, `doorsNumber`, `numberOfSeats`, `color`, `lacquer`, `enginePower`, `engineCapacity`, `fuelType`, `testDriveable`, `VIN`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
      data
    );
    const [vehicle] = await query("SELECT * FROM vehicle WHERE id = ?", [
      insertId,
    ]);

    res.json({
      data: vehicle,
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

    await query(`UPDATE vehicle SET ${data.join(", ")} WHERE id = ?`, [
      ...values,
      req.params.id,
    ]);
    const [vehicle] = await query("SELECT * FROM vehicle WHERE id = ?", [
      req.params.id,
    ]);

    res.json({
      data: vehicle,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports.delete = async (req, res, next) => {
  try {
    await query("DELETE FROM vehicle WHERE id = ?", [req.params.id]);

    res.json({
      message: "Vehicle deleted",
      status: "success",
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
