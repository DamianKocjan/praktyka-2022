const { query, getOneOr404 } = require("../db");

module.exports.getAll = async (_req, res, next) => {
  try {
    const sales = await query(
      "SELECT s.id, s.vehicleId, s.cost, s.status, s.description, s.createdAt, s.updatedAt, v.name as vehicleName, v.model as vehicleModel, v.type as vehicleType, v.description as vehicleDescription, v.condition as vehicleCondition, v.productionYear as vehicleProductionYear, v.mileage as vehicleMileage, v.doorsNumber as vehicleDoorsNumber, v.numberOfSeats as vehicleNumberOfSeats, v.color as vehicleColor, v.lacquer as vehicleLacquer, v.enginePower as vehicleEnginePower, v.engineCapacity as vehicleEngineCapacity, v.fuelType as vehicleFuelType, v.transmission as vehicleTransmission, v.testDriveable as vehicleTestDriveable, v.VIN as vehicleVIN, v.createdAt as vehicleCreatedAt, v.updatedAt as vehicleUpdatedAt, m.name as vehicleManufacturerName, m.description as vehicleManufacturerDescription, m.yearOfEstablishment as vehicleManufacturerYearOfEstablishment, m.createdAt as vehicleManufacturerCreatedAt, m.updatedAt as vehicleManufacturerUpdatedAt FROM sale s LEFT JOIN vehicle v ON s.vehicleId = v.id LEFT JOIN manufacturer m ON v.manufacturerId = m.id"
    );

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
    const sale = await getOneOr404(
      "SELECT s.id, s.vehicleId, s.cost, s.status, s.description, s.createdAt, s.updatedAt, v.name as vehicleName, v.model as vehicleModel, v.type as vehicleType, v.description as vehicleDescription, v.condition as vehicleCondition, v.productionYear as vehicleProductionYear, v.mileage as vehicleMileage, v.doorsNumber as vehicleDoorsNumber, v.numberOfSeats as vehicleNumberOfSeats, v.color as vehicleColor, v.lacquer as vehicleLacquer, v.enginePower as vehicleEnginePower, v.engineCapacity as vehicleEngineCapacity, v.fuelType as vehicleFuelType, v.transmission as vehicleTransmission, v.testDriveable as vehicleTestDriveable, v.VIN as vehicleVIN, v.createdAt as vehicleCreatedAt, v.updatedAt as vehicleUpdatedAt, m.name as vehicleManufacturerName, m.description as vehicleManufacturerDescription, m.yearOfEstablishment as vehicleManufacturerYearOfEstablishment, m.createdAt as vehicleManufacturerCreatedAt, m.updatedAt as vehicleManufacturerUpdatedAt FROM sale s LEFT JOIN vehicle v ON s.vehicleId = v.id LEFT JOIN manufacturer m ON v.manufacturerId = m.id WHERE id = ?",
      [req.params.id]
    );

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
    const [sale] = await query(
      "SELECT s.id, s.vehicleId, s.cost, s.status, s.description, s.createdAt, s.updatedAt, v.name as vehicleName, v.model as vehicleModel, v.type as vehicleType, v.description as vehicleDescription, v.condition as vehicleCondition, v.productionYear as vehicleProductionYear, v.mileage as vehicleMileage, v.doorsNumber as vehicleDoorsNumber, v.numberOfSeats as vehicleNumberOfSeats, v.color as vehicleColor, v.lacquer as vehicleLacquer, v.enginePower as vehicleEnginePower, v.engineCapacity as vehicleEngineCapacity, v.fuelType as vehicleFuelType, v.transmission as vehicleTransmission, v.testDriveable as vehicleTestDriveable, v.VIN as vehicleVIN, v.createdAt as vehicleCreatedAt, v.updatedAt as vehicleUpdatedAt, m.name as vehicleManufacturerName, m.description as vehicleManufacturerDescription, m.yearOfEstablishment as vehicleManufacturerYearOfEstablishment, m.createdAt as vehicleManufacturerCreatedAt, m.updatedAt as vehicleManufacturerUpdatedAt FROM sale s LEFT JOIN vehicle v ON s.vehicleId = v.id LEFT JOIN manufacturer m ON v.manufacturerId = m.id WHERE id = ?",
      [insertId]
    );

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
    await getOneOr404("SELECT * FROM sale WHERE id = ?", [req.params.id]);

    const fields = Object.keys(req.body);
    const data = fields.map((field) => `${field} = ?`);
    const values = fields.map((field) => req.body[field]);

    await query(`UPDATE sale SET ${data.join(", ")} WHERE id = ?`, [
      ...values,
      req.params.id,
    ]);
    const [sale] = await query(
      "SELECT s.id, s.vehicleId, s.cost, s.status, s.description, s.createdAt, s.updatedAt, v.name as vehicleName, v.model as vehicleModel, v.type as vehicleType, v.description as vehicleDescription, v.condition as vehicleCondition, v.productionYear as vehicleProductionYear, v.mileage as vehicleMileage, v.doorsNumber as vehicleDoorsNumber, v.numberOfSeats as vehicleNumberOfSeats, v.color as vehicleColor, v.lacquer as vehicleLacquer, v.enginePower as vehicleEnginePower, v.engineCapacity as vehicleEngineCapacity, v.fuelType as vehicleFuelType, v.transmission as vehicleTransmission, v.testDriveable as vehicleTestDriveable, v.VIN as vehicleVIN, v.createdAt as vehicleCreatedAt, v.updatedAt as vehicleUpdatedAt, m.name as vehicleManufacturerName, m.description as vehicleManufacturerDescription, m.yearOfEstablishment as vehicleManufacturerYearOfEstablishment, m.createdAt as vehicleManufacturerCreatedAt, m.updatedAt as vehicleManufacturerUpdatedAt FROM sale s LEFT JOIN vehicle v ON s.vehicleId = v.id LEFT JOIN manufacturer m ON v.manufacturerId = m.id WHERE id = ?",
      [req.params.id]
    );

    res.json({
      data: sale,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
