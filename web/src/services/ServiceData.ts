import axios from "../utils/axios";
import type {
  ServiceAllResponse,
  ServiceCreateRequest,
  ServiceResponse,
  ServiceUpdateRequest,
} from "../types";

class ServiceDataService {
  async getAll(): Promise<ServiceAllResponse> {
    return await axios.get("/services");
  }

  async get(id: string): Promise<ServiceResponse> {
    return await axios.get(`/services/${id}`);
  }

  async create(data: ServiceCreateRequest): Promise<ServiceResponse> {
    return await axios.post("/services", data);
  }
  async update(
    id: string,
    data: ServiceUpdateRequest
  ): Promise<ServiceResponse> {
    return await axios.put(`/services/${id}`, data);
  }

  async delete(id: string): Promise<unknown> {
    return await axios.delete(`/services/${id}`);
  }
}
export default new ServiceDataService();
