import { defineStore } from "pinia";

import router from "@/router";
import axios from "@/utils/axios";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: null,
    token: window.localStorage.getItem("token") || null,
    roles: [] as string[],
    returnUrl: null as string | null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
    isAdmin: (state) => state.roles.includes("ROLE_ADMIN"),
  },
  actions: {
    async login({ email, password }: { email: string; password: string }) {
      const { data: result } = await axios.post("/auth/login", {
        email,
        password,
      });

      axios.defaults.headers.common["x-access-token"] = result.data.token;
      window.localStorage.setItem("token", result.data.token);

      this.user = result.data.user;
      this.token = result.data.token;
      this.roles = result.data.roles;

      router.push(this.returnUrl || "/");
    },

    logout() {
      this.user = null;
      this.token = null;
      this.roles = [];
      router.push("/login");
    },

    async me() {
      if (!this.token) {
        return;
      }

      if (this.user) {
        return this.user;
      }

      const { data: result } = await axios.get("/auth/me");

      this.user = result.data.user;
      this.roles = result.data.roles;
    },
  },
});
