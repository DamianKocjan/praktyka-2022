import axios from "../utils/axios";
import type {
  VehicleAllResponse,
  VehicleCreateRequest,
  VehicleResponse,
  VehicleUpdateRequest,
} from "../types";

class VehicleDataService {
  async getAll(): Promise<VehicleAllResponse> {
    return await axios.get("/vehicles");
  }

  async get(id: string): Promise<VehicleResponse> {
    return await axios.get(`/vehicles/${id}`);
  }

  async create(data: VehicleCreateRequest): Promise<VehicleResponse> {
    return await axios.post("/vehicles", data);
  }
  async update(
    id: string,
    data: VehicleUpdateRequest
  ): Promise<VehicleResponse> {
    return await axios.put(`/vehicles/${id}`, data);
  }

  async delete(id: string): Promise<unknown> {
    return await axios.delete(`/vehicles/${id}`);
  }
}
export default new VehicleDataService();
