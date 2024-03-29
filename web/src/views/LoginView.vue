<script setup lang="ts">
import { LockClosedIcon } from "@heroicons/vue/solid";
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";

import router from "@/router";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

onMounted(() => {
  if (authStore.isAuthenticated) {
    router.push(authStore.returnUrl || "/");
  }
});

const email = ref("");
const password = ref("");

async function login(e: Event) {
  e.preventDefault();

  const auth = useAuthStore();

  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();

  if (emailVal.length === 0 || passwordVal.length === 0) {
    return;
  }

  try {
    await auth.login({ email: emailVal, password: passwordVal });
  } catch (error) {
    console.error(error);
  }
}
</script>

<template>
  <main
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
          Zaloguj się
        </h2>
      </div>
      <form class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required="true"
              v-model="email"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
              placeholder="Email"
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
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
              placeholder="Hasło"
            />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              class="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
            />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">
              Zapamiętaj mnie
            </label>
          </div>

          <div class="text-sm">
            <RouterLink
              to="#"
              class="font-medium text-gray-600 hover:text-gray-500"
            >
              Zapomniałeś hasła?
            </RouterLink>
          </div>
        </div>

        <div>
          <button
            type="submit"
            @click="login"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon
                class="h-5 w-5 text-gray-500 group-hover:text-gray-400"
                aria-hidden="true"
              />
            </span>
            Zaloguj
          </button>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <label
              for="registerActive"
              class="ml-2 block text-sm text-gray-900"
            >
              Nie masz jeszcze konta?
            </label>
          </div>
          <div class="text-sm">
            <RouterLink
              to="/register"
              class="font-medium text-gray-800 hover:text-gray-800"
            >
              Zarejestruj się
            </RouterLink>
          </div>
        </div>
      </form>
    </div>
  </main>
</template>
