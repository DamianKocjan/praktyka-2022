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

export interface VehicleData {
  id: string;
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

export type VehicleUpdateRequest = Partial<
  Omit<Vehicle, "id", "createdAt", "updatedAt">
>;

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

export type ServiceUpdateRequest = Partial<
  Omit<Service, "id", "userId", "createdAt", "updatedAt">
>;

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

export interface Order {
  id: string;
  saleId: string;
  userId: string;
  deliveredAt: Date;
  status: string;
  createdAt: Date;
  updatedAt: Date;
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

export type RegisterResponse = Omit<User, "passwordHashed">;

export interface Manufacturer {
  id: string;
  name: string;
  description: string;
  yearOfEstablishment: Date;
  createdAt: Date;
  updatedAt: Date;
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
