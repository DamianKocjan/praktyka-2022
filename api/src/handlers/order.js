const { query, getOneOr404 } = require("../db");

module.exports.getAll = async (req, res, next) => {
  try {
    const { userId } = req;
    const orders = await query(
      "SELECT o.id, o.saleId, o.status, o.deliveredAt, o.createdAt, o.updatedAt, s.id as saleId, s.vehicleId as saleVehicleId, s.cost as saleCost, s.status as saleStatus, s.description as saleStatus, s.guarantee as saleGuarantee, s.createdAt as saleCreatedAt, s.updatedAt as saleUpdatedAt, v.name as saleVehicleName, v.model as saleVehicleModel, v.type as saleVehicleType, v.description as saleVehicleDescription, v.condition as saleVehicleCondition, v.productionYear as saleVehicleProductionYear, v.mileage as saleVehicleMileage, v.doorsNumber as saleVehicleDoorsNumber, v.numberOfSeats as saleVehicleNumberOfSeats, v.color as saleVehicleColor, v.lacquer as saleVehicleLacquer, v.enginePower as saleVehicleEnginePower, v.engineCapacity as saleVehicleEngineCapacity, v.fuelType as saleVehicleFuelType, v.transmission as saleVehicleTransmission, v.testDriveable as saleVehicleTestDriveable, v.VIN as saleVehicleVIN, v.createdAt as saleVehicleCreatedAt, v.updatedAt as saleVehicleUpdatedAt, m.name as saleVehicleManufacturerName, m.description as saleVehicleManufacturerDescription, m.yearOfEstablishment as saleVehicleManufacturerYearOfEstablishment, m.createdAt as saleVehicleManufacturerCreatedAt, m.updatedAt as saleVehicleManufacturerUpdatedAt FROM `order` o LEFT JOIN sale s ON o.saleId = s.id LEFT JOIN vehicle v ON s.vehicleId = v.id LEFT JOIN manufacturer m ON v.manufacturerId = m.id WHERE userId = ?",
      [userId]
    );

    res.status(200).json({
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
      "SELECT o.id, o.saleId, o.status, o.deliveredAt, o.createdAt, o.updatedAt, s.id as saleId, s.vehicleId as saleVehicleId, s.cost as saleCost, s.status as saleStatus, s.description as saleStatus, s.guarantee as saleGuarantee, s.createdAt as saleCreatedAt, s.updatedAt as saleUpdatedAt, v.name as saleVehicleName, v.model as saleVehicleModel, v.type as saleVehicleType, v.description as saleVehicleDescription, v.condition as saleVehicleCondition, v.productionYear as saleVehicleProductionYear, v.mileage as saleVehicleMileage, v.doorsNumber as saleVehicleDoorsNumber, v.numberOfSeats as saleVehicleNumberOfSeats, v.color as saleVehicleColor, v.lacquer as saleVehicleLacquer, v.enginePower as saleVehicleEnginePower, v.engineCapacity as saleVehicleEngineCapacity, v.fuelType as saleVehicleFuelType, v.transmission as saleVehicleTransmission, v.testDriveable as saleVehicleTestDriveable, v.VIN as saleVehicleVIN, v.createdAt as saleVehicleCreatedAt, v.updatedAt as saleVehicleUpdatedAt, m.name as saleVehicleManufacturerName, m.description as saleVehicleManufacturerDescription, m.yearOfEstablishment as saleVehicleManufacturerYearOfEstablishment, m.createdAt as saleVehicleManufacturerCreatedAt, m.updatedAt as saleVehicleManufacturerUpdatedAt FROM `order` o LEFT JOIN sale s ON o.saleId = s.id LEFT JOIN vehicle v ON s.vehicleId = v.id LEFT JOIN manufacturer m ON v.manufacturerId = m.id WHERE o.id = ? AND userId",
      [req.params.id, userId]
    );

    res.status(200).json({
      data: order,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports.create = async (req, res, next) => {
  try {
    const { userId } = req;
    const data = [req.body.saleId, userId, "pending"];

    const { insertId } = await query(
      "INSERT INTO `order` (`saleId`, `userId`, `status`) VALUES (?,?,?)",
      data
    );
    const [order] = await query(
      "SELECT o.id, o.saleId, o.status, o.deliveredAt, o.createdAt, o.updatedAt, s.id as saleId, s.vehicleId as saleVehicleId, s.cost as saleCost, s.status as saleStatus, s.description as saleStatus, s.guarantee as saleGuarantee, s.createdAt as saleCreatedAt, s.updatedAt as saleUpdatedAt, v.name as saleVehicleName, v.model as saleVehicleModel, v.type as saleVehicleType, v.description as saleVehicleDescription, v.condition as saleVehicleCondition, v.productionYear as saleVehicleProductionYear, v.mileage as saleVehicleMileage, v.doorsNumber as saleVehicleDoorsNumber, v.numberOfSeats as saleVehicleNumberOfSeats, v.color as saleVehicleColor, v.lacquer as saleVehicleLacquer, v.enginePower as saleVehicleEnginePower, v.engineCapacity as saleVehicleEngineCapacity, v.fuelType as saleVehicleFuelType, v.transmission as saleVehicleTransmission, v.testDriveable as saleVehicleTestDriveable, v.VIN as saleVehicleVIN, v.createdAt as saleVehicleCreatedAt, v.updatedAt as saleVehicleUpdatedAt, m.name as saleVehicleManufacturerName, m.description as saleVehicleManufacturerDescription, m.yearOfEstablishment as saleVehicleManufacturerYearOfEstablishment, m.createdAt as saleVehicleManufacturerCreatedAt, m.updatedAt as saleVehicleManufacturerUpdatedAt FROM `order` o LEFT JOIN sale s ON o.saleId = s.id LEFT JOIN vehicle v ON s.vehicleId = v.id LEFT JOIN manufacturer m ON v.manufacturerId = m.id WHERE o.id = ?",
      [insertId]
    );

    res.status(201).json({
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

    await getOneOr404("SELECT * FROM `order` WHERE id = ? AND userId = ?", [
      req.params.id,
      userId,
    ]);

    const fields = Object.keys(req.body);
    const data = fields.map((field) => `${field} = ?`);
    const values = fields.map((field) => req.body[field]);

    await query(`UPDATE \`order\` SET ${data.join(", ")} WHERE id = ?`, [
      ...values,
      req.params.id,
    ]);
    const [order] = await query(
      "SELECT o.id, o.saleId, o.status, o.deliveredAt, o.createdAt, o.updatedAt, s.id as saleId, s.vehicleId as saleVehicleId, s.cost as saleCost, s.status as saleStatus, s.description as saleStatus, s.guarantee as saleGuarantee, s.createdAt as saleCreatedAt, s.updatedAt as saleUpdatedAt, v.name as saleVehicleName, v.model as saleVehicleModel, v.type as saleVehicleType, v.description as saleVehicleDescription, v.condition as saleVehicleCondition, v.productionYear as saleVehicleProductionYear, v.mileage as saleVehicleMileage, v.doorsNumber as saleVehicleDoorsNumber, v.numberOfSeats as saleVehicleNumberOfSeats, v.color as saleVehicleColor, v.lacquer as saleVehicleLacquer, v.enginePower as saleVehicleEnginePower, v.engineCapacity as saleVehicleEngineCapacity, v.fuelType as saleVehicleFuelType, v.transmission as saleVehicleTransmission, v.testDriveable as saleVehicleTestDriveable, v.VIN as saleVehicleVIN, v.createdAt as saleVehicleCreatedAt, v.updatedAt as saleVehicleUpdatedAt, m.name as saleVehicleManufacturerName, m.description as saleVehicleManufacturerDescription, m.yearOfEstablishment as saleVehicleManufacturerYearOfEstablishment, m.createdAt as saleVehicleManufacturerCreatedAt, m.updatedAt as saleVehicleManufacturerUpdatedAt FROM `order` o LEFT JOIN sale s ON o.saleId = s.id LEFT JOIN vehicle v ON s.vehicleId = v.id LEFT JOIN manufacturer m ON v.manufacturerId = m.id WHERE o.id = ?",
      [req.params.id]
    );

    res.status(204).json({
      data: order,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
