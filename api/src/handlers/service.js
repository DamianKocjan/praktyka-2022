const { query, getOneOr404 } = require("../db");

module.exports.getAll = async (_req, res, next) => {
  try {
    const services = await query("SELECT s.id, s.vehicleId, s.cost, s.status, s.description, s.createdAt, s.updatedAt, v.name as vehicleName, v.model as vehicleModel, v.type as vehicleType, v.description as vehicleDescription, v.condition as vehicleCondition, v.productionYear as vehicleProductionYear, v.mileage as vehicleMileage, v.doorsNumber as vehicleDoorsNumber, v.numberOfSeats as vehicleNumberOfSeats, v.color as vehicleColor, v.lacquer as vehicleLacquer, v.enginePower as vehicleEnginePower, v.engineCapacity as vehicleEngineCapacity, v.fuelType as vehicleFuelType, v.transmission as vehicleTransmission, v.testDriveable as vehicleTestDriveable, v.VIN as vehicleVIN, v.createdAt as vehicleCreatedAt, v.updatedAt as vehicleUpdatedAt FROM service s LEFT JOIN vehicle v ON s.vehicleId = v.id");

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
    const service = await getOneOr404("SELEC s.id, s.vehicleId, s.cost, s.status, s.description, s.createdAt, s.updatedAt, v.name as vehicleName, v.model as vehicleModel, v.type as vehicleType, v.description as vehicleDescription, v.condition as vehicleCondition, v.productionYear as vehicleProductionYear, v.mileage as vehicleMileage, v.doorsNumber as vehicleDoorsNumber, v.numberOfSeats as vehicleNumberOfSeats, v.color as vehicleColor, v.lacquer as vehicleLacquer, v.enginePower as vehicleEnginePower, v.engineCapacity as vehicleEngineCapacity, v.fuelType as vehicleFuelType, v.transmission as vehicleTransmission, v.testDriveable as vehicleTestDriveable, v.VIN as vehicleVIN, v.createdAt as vehicleCreatedAt, v.updatedAt as vehicleUpdatedAt FROM service s LEFT JOIN vehicle v ON s.vehicleId = v.id WHERE s.id = ?", [
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
    const [service] = await query("SELECT s.id, s.vehicleId, s.cost, s.status, s.description, s.createdAt, s.updatedAt, v.name as vehicleName, v.model as vehicleModel, v.type as vehicleType, v.description as vehicleDescription, v.condition as vehicleCondition, v.productionYear as vehicleProductionYear, v.mileage as vehicleMileage, v.doorsNumber as vehicleDoorsNumber, v.numberOfSeats as vehicleNumberOfSeats, v.color as vehicleColor, v.lacquer as vehicleLacquer, v.enginePower as vehicleEnginePower, v.engineCapacity as vehicleEngineCapacity, v.fuelType as vehicleFuelType, v.transmission as vehicleTransmission, v.testDriveable as vehicleTestDriveable, v.VIN as vehicleVIN, v.createdAt as vehicleCreatedAt, v.updatedAt as vehicleUpdatedAt FROM service s LEFT JOIN vehicle v ON s.vehicleId = v.id WHERE s.id = ?", [
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
    const [service] = await query("SELECT s.id, s.vehicleId, s.cost, s.status, s.description, s.createdAt, s.updatedAt, v.name as vehicleName, v.model as vehicleModel, v.type as vehicleType, v.description as vehicleDescription, v.condition as vehicleCondition, v.productionYear as vehicleProductionYear, v.mileage as vehicleMileage, v.doorsNumber as vehicleDoorsNumber, v.numberOfSeats as vehicleNumberOfSeats, v.color as vehicleColor, v.lacquer as vehicleLacquer, v.enginePower as vehicleEnginePower, v.engineCapacity as vehicleEngineCapacity, v.fuelType as vehicleFuelType, v.transmission as vehicleTransmission, v.testDriveable as vehicleTestDriveable, v.VIN as vehicleVIN, v.createdAt as vehicleCreatedAt, v.updatedAt as vehicleUpdatedAt FROM service s LEFT JOIN vehicle v ON s.vehicleId = v.id WHERE s.id = ?", [
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
