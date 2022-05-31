const { query, getOneOr404 } = require("../db");

module.exports.getAll = async (_req, res, next) => {
  try {
    const vehicles = await query("SELECT v.id, v.manufacturerId, v.name, v.model, v.type, v.description, v.condition, v.productionYear, v.mileage, v.doorsNumber, v.numberOfSeats, v.color, v.lacquer, v.enginePower, v.engineCapacity, v.fuelType, v.transmission, v.testDriveable, v.VIN, v.createdAt, v.updatedAt, m.name as manufacturerName, m.description as manufacturerDescription, m.yearOfEstablishment as manufacturerYearOfEstablishment, m.createdAt as manufacturerCreatedAt, m.updatedAt as manufacturerUpdatedAt FROM vehicle v LEFT JOIN manufacturer m ON v.manufacturerId = m.id");

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
    const vehicle = await query("SELECT v.id, v.manufacturerId, v.name, v.type, v.description, v.condition, v.productionYear, v.mileage, v.doorsNumber, v.numberOfSeats, v.color, v.lacquer, v.enginePower, v.engineCapacity, v.fuelType, v.transmission, v.testDriveable, v.VIN, v.createdAt, v.updatedAt, m.name as manufacturerName, m.description as manufacturerDescription, m.yearOfEstablishment as manufacturerYearOfEstablishment, m.createdAt as manufacturerCreatedAt, m.updatedAt as manufacturerUpdatedAt FROM vehicle v LEFT JOIN manufacturer m ON v.manufacturerId = m.id WHERE v.id = ?", [
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
    const [vehicle] = await query("SELECT v.id, v.manufacturerId, v.name, v.type, v.description, v.condition, v.productionYear, v.mileage, v.doorsNumber, v.numberOfSeats, v.color, v.lacquer, v.enginePower, v.engineCapacity, v.fuelType, v.transmission, v.testDriveable, v.VIN, v.createdAt, v.updatedAt, m.name as manufacturerName, m.description as manufacturerDescription, m.yearOfEstablishment as manufacturerYearOfEstablishment, m.createdAt as manufacturerCreatedAt, m.updatedAt as manufacturerUpdatedAt FROM vehicle v LEFT JOIN manufacturer m ON v.manufacturerId = m.id WHERE v.id = ?", [
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
    await getOneOr404("SELECT * FROM vehicle WHERE id = ?", [req.params.id]);

    const fields = Object.keys(req.body);
    const data = fields.map((field) => `${field} = ?`);
    const values = fields.map((field) => req.body[field]);

    await query(`UPDATE vehicle SET ${data.join(", ")} WHERE id = ?`, [
      ...values,
      req.params.id,
    ]);
    const [vehicle] = await query("SELECT v.id, v.manufacturerId, v.name, v.type, v.description, v.condition, v.productionYear, v.mileage, v.doorsNumber, v.numberOfSeats, v.color, v.lacquer, v.enginePower, v.engineCapacity, v.fuelType, v.transmission, v.testDriveable, v.VIN, v.createdAt, v.updatedAt, m.name as manufacturerName, m.description as manufacturerDescription, m.yearOfEstablishment as manufacturerYearOfEstablishment, m.createdAt as manufacturerCreatedAt, m.updatedAt as manufacturerUpdatedAt FROM vehicle v LEFT JOIN manufacturer m ON v.manufacturerId = m.id WHERE v.id = ?", [
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
    await getOneOr404("SELECT * FROM vehicle WHERE id = ?", [req.params.id]);
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
