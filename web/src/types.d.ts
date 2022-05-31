export interface Vehicle {
  id: string;
  manufacturerId: string;
  name: string;
  model: string;
  type: string;
  description: string;
  condition: string;
  productionYear: number;
  mileage: number;
  doorsNumber: number;
  numberOfSeats: number;
  color: string;
  lacquer: string;
  enginePower: number;
  engineCapacity: number;
  fuelType: string;
  transmission: string;
  testDriveable: boolean;
  VIN: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface VehicleData extends Vehicle {
  manufacturerId: string;
  manufacturerName: string;
  manufacturerDescription: string;
  manufacturerYearOfEstablishment: Date;
  manufacturerCreatedAt: Date;
  manufacturerUpdatedAt: Date;
}

export interface VehicleAllResponse {
  data: VehicleData[];
}

export interface VehicleResponse {
  data: VehicleData;
}

export type VehicleCreateRequest = Omit<
  Vehicle,
  "id",
  "createdAt",
  "updatedAt"
>;

export type VehicleCreateResponse = VehicleResponse;

export type VehicleUpdateRequest = {
  data: Partial<Omit<Vehicle, "id", "createdAt", "updatedAt">>;
};

export type VehicleUpdateResponse = VehicleResponse;

export interface Service {
  id: string;
  vehicleId: string;
  userId: string;
  cost: number;
  status: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

interface ServiceData extends Service {
  vehicleName: string;
  vehicleModel: string;
  vehicleType: string;
  vehicleDescription: string;
  vehicleCondition: string;
  vehicleProductionYear: Date;
  vehicleMileage: string;
  vehicleDoorsNumber: number;
  vehicleNumberOfSeats: number;
  vehicleColor: string;
  vehicleLacquer: string;
  vehicleEnginePower: string;
  vehicleEngineCapacity: string;
  vehicleFuelType: string;
  vehicleTransmission: string;
  vehicleTestDriveable: number;
  vehicleVIN: string;
  vehicleCreatedAt: Date;
  vehicleUpdatedAt: Date;
}

export interface ServiceAllResponse {
  data: ServiceData[];
}

export interface ServiceResponse {
  data: ServiceData;
}

export type ServiceCreateRequest = Omit<
  Service,
  "id",
  "userId",
  "createdAt",
  "updatedAt"
>;

export type ServiceCreateResponse = ServiceResponse;

export type ServiceUpdateRequest = {
  data: Partial<Omit<Service, "id", "userId", "createdAt", "updatedAt">>;
};
export type ServiceUpdateResponse = ServiceResponse;

export interface Sale {
  id: string;
  vehicleId: string;
  cost: number;
  status: string;
  description: string;
  guarantee: Date;
  createdAt: Date;
  updatedAt: Date;
}

interface SaleData extends Sale {
  vehicleName: string;
  vehicleModel: string;
  vehicleType: string;
  vehicleDescription: string;
  vehicleCondition: string;
  vehicleProductionYear: Date;
  vehicleMileage: string;
  vehicleDoorsNumber: number;
  vehicleNumberOfSeats: number;
  vehicleColor: string;
  vehicleLacquer: string;
  vehicleEnginePower: string;
  vehicleEngineCapacity: string;
  vehicleFuelType: string;
  vehicleTransmission: string;
  vehicleTestDriveable: number;
  vehicleVIN: string;
  vehicleCreatedAt: Date;
  vehicleUpdatedAt: Date;
  vehicleManufacturerName: string;
  vehicleManufacturerDescription: string;
  vehicleManufacturerYearOfEstablishment: Date;
  vehicleManufacturerCreatedAt: Date;
  vehicleManufacturerUpdatedAt: Date;
}

export interface SaleAllResponse {
  data: SaleData[];
}
export interface SaleResponse {
  data: SaleData;
}

export interface Order {
  id: string;
  saleId: string;
  userId: string;
  deliveredAt: Date;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

interface OrderData extends Order {
  saleVehicleId: number;
  saleCost: number;
  saleStatus: string;
  saleGuarantee: Date;
  saleCreatedAt: Date;
  saleUpdatedAt: Date;
  saleVehicleName: string;
  saleVehicleModel: string;
  saleVehicleType: string;
  saleVehicleDescription: string;
  saleVehicleCondition: string;
  saleVehicleProductionYear: Date;
  saleVehicleMileage: string;
  saleVehicleDoorsNumber: number;
  saleVehicleNumberOfSeats: number;
  saleVehicleColor: string;
  saleVehicleLacquer: string;
  saleVehicleEnginePower: string;
  saleVehicleEngineCapacity: string;
  saleVehicleFuelType: string;
  saleVehicleTransmission: string;
  saleVehicleTestDriveable: number;
  saleVehicleVIN: string;
  saleVehicleCreatedAt: Date;
  saleVehicleUpdatedAt: Date;
  saleVehicleManufacturerName: string;
  saleVehicleManufacturerDescription: string;
  saleVehicleManufacturerYearOfEstablishment: Date;
  saleVehicleManufacturerCreatedAt: Date;
  saleVehicleManufacturerUpdatedAt: Date;
}

export interface OrderAllResponse {
  data: OrderData[];
}
export interface OrderResponse {
  data: OrderData;
}

export interface User {
  id: string;
  email: string;
  passwordHashed: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface RegisterRequest {
  email: string;
  password: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
}

export type RegisterResponse = {
  data: Omit<User, "passwordHashed">;
};

export interface Manufacturer {
  id: string;
  name: string;
  description: string;
  yearOfEstablishment: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface ManufacturersResponse {
  data: Manufacturer[];
}

export interface ManufacturerCreate {
  name: string;
  description: string;
  yearOfEstablishment: string;
}

export interface Address {
  id: string;
  street: string;
  city: string;
  zip: string;
  state: string;
  country: string;
  isSelected: boolean;
  createdAt: Date;
  updatedAt: Date;
}
