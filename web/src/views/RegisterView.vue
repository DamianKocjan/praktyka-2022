<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";
</script>
<script lang="ts">
export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      firstName: "",
      lastName: "",
      dateOfBirth: "",
    };
  },
  mounted() {
    const auth = useAuthStore();

    if (auth.isAuthenticated) {
      this.$router.push("/");
    }
  },
  methods: {
    async register(e: Event) {
      e.preventDefault();

      const auth = useAuthStore();

      console.log({
        email: this.email,
        password: this.password,
        phoneNumber: this.phoneNumber,
        firstName: this.firstName,
        lastName: this.lastName,
        dateOfBirth: this.dateOfBirth,
      });

      if (
        this.email.trim().length === 0 ||
        this.password.trim().length === 0 ||
        this.confirmPassword.trim().length === 0 ||
        this.phoneNumber.trim().length === 0 ||
        this.firstName.trim().length === 0 ||
        this.lastName.trim().length === 0 ||
        this.dateOfBirth.trim().length === 0 ||
        this.password !== this.confirmPassword
      ) {
        return;
      }

      await auth.register({
        email: this.email,
        password: this.password,
        phoneNumber: this.phoneNumber,
        firstName: this.firstName,
        lastName: this.lastName,
        dateOfBirth: this.dateOfBirth,
      });
    },
  },
};
</script>
<template>
  <div
    class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <img
          class="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Zarejestruj się
        </h2>
      </div>

      <form class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="firstName" class="sr-only">Imię</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              autocomplete="firstName"
              required="true"
              v-model="firstName"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Imię"
            />
          </div>

          <div>
            <label for="lastName" class="sr-only">Nazwisko</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              autocomplete="lastName"
              required="true"
              v-model="lastName"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Nazwisko"
            />
          </div>

          <div>
            <label for="dateOfBirth" class="sr-only">Data urodzenia</label>
            <input
              id="dateOfBirth"
              name="dateOfBirth"
              type="date"
              autocomplete="dateOfBirth"
              required="true"
              v-model="dateOfBirth"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Data urodzenia"
            />
          </div>

          <div>
            <label for="phoneNumber" class="sr-only">Number telefonu</label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              autocomplete="phoneNumber"
              required="true"
              v-model="phoneNumber"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Number telefonu"
            />
          </div>

          <div>
            <label for="email" class="sr-only">Hasło</label>
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required="true"
              v-model="email"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Adres email"
            />
          </div>

          <div>
            <label for="password" class="sr-only">Hasło</label>
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required="true"
              v-model="password"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Hasło"
            />
          </div>

          <div>
            <label for="confirmpassword" class="sr-only">Hasło</label>
            <input
              id="confirmpassword"
              name="confirmpassword"
              type="password"
              autocomplete="confirm-password"
              required="true"
              v-model="confirmPassword"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Potwierdz hasło"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            @click="register"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon
                class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                aria-hidden="true"
              />
            </span>
            Zarejestruj
          </button>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <label
              for="registerActive"
              class="ml-2 block text-sm text-gray-900"
            >
              Posiadasz już konto?
            </label>
          </div>
          <div class="text-sm">
            <RouterLink
              to="/login"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Zaloguj się
            </RouterLink>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
