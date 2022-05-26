import { defineStore } from "pinia";

import axios from "../utils/axios";
import type { RegisterRequest, RegisterResponse } from "../types";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: null,
    token: window.localStorage.getItem("token") || null,
    roles: [] as string[],
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
    isAdmin: (state) => state.roles.includes("admin"),
  },
  actions: {
    async login({ email, password }: { email: string; password: string }) {
      const response = await axios.post("/auth/login", { email, password });

      axios.defaults.headers.common["x-access-token"] = response.data.token;
      window.localStorage.setItem("token", response.data.token);

      this.user = response.data.user;
      this.token = response.data.token;
      this.roles = response.data.roles;
    },

    async register(data: RegisterRequest): Promise<RegisterResponse> {
      const response = await axios.post("/auth/register", data);

      return response.data;
    },

    logout() {
      this.user = null;
      this.token = null;
      this.roles = [];
    },

    async me() {
      const response = await axios.get("/auth/me");

      this.user = response.data.user;
      this.roles = response.data.roles;
    },
  },
});
